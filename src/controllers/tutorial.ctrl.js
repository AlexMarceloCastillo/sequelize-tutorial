const { Tutorial } = require("../database/db");


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
            await Tutorial.create({ title, description});
            res.sendStatus(201);
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    testTransaction: async (req, res) => {
        try {
            res.status(201).json({ data: req.body })
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}