const { Tutorial, connection, Comment } = require("../database/db");


module.exports = {
    getAll: async (req, res) => {
        try {
            let data = await Tutorial.findAll();
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    getById: async (req, res) => {
        let { id } = req.params;
        try {
            let data = await Tutorial.findAll({
                where: { id }
            });
            
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    saveOne: async (req, res) => {
        let { title, description } = req.body;
        try {
            await Tutorial.create({ title, description });
            res.sendStatus(201);
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    testTransaction: async (req, res) => {
        // https://ultimateakash.com/blog-details/IiwzPGAKYAo=/How-to-implement-Transactions-in-Sequelize-&-Node.Js-(Express)
        let t;
        let { title, description, arraysOfComments } = req.body;
        try {

            t = await connection.transaction();

            let newTutorial = await Tutorial.create(
                { title, description },
                {
                    transaction: t 
                }
            );

            let arrayComments = arraysOfComments.map( (item) => {
                item.fk_tutorial = newTutorial.id;
                return item;
            });

            let newComments = await Comment.bulkCreate(arrayComments, {
                transaction: t
            });

            await t.commit();

            res.status(201).json({ newTutorial, newComments });
        } catch (error) {
            t.rollback();
            res.status(500).json({ msg: "rollback", error: error.message })
        }
    }
}