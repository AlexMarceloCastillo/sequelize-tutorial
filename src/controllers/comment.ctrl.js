const { Comment } = require("../database/db");

module.exports = {
    getAll: async (req, res) => {
        try {
            let data = await Comment.findAll();
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    getById: async (req, res) => {
        let { id } = req.params;
        try {
            let data = await Comment.findAll({
                where: { id }
            });
            
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    saveOne: async (req, res) => {
        let { name, text, tutorialId } = req.body;
        try {
            await Comment.create({ name, text, tutorialId});
            res.sendStatus(201);
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}