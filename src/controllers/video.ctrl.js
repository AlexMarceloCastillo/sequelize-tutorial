const { Video, sequelize, Comentario } = require("../database/models/index");


module.exports = {
    getAll: async (req, res) => {
        try {
            let data = await Video.findAll();
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    getById: async (req, res) => {
        let { id } = req.params;
        try {
            let data = await Video.findAll({
                where: { id }
            });
            
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    saveOne: async (req, res) => {
        let { titulo, descripcion } = req.body;
        try {
            await Video.create({ titulo, descripcion });
            res.sendStatus(201);
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },
    testTransaction: async (req, res) => {
        // https://ultimateakash.com/blog-details/IiwzPGAKYAo=/How-to-implement-Transactions-in-Sequelize-&-Node.Js-(Express)
        let t;
        let { titulo, descripcion, comentarios } = req.body;
        try {

            t = await connection.transaction();

            await t.commit();

            res.status(201).json({ data: []});
        } catch (error) {
            t.rollback();
            res.status(500).json({ msg: "rollback", error: error.message })
        }
    }
}