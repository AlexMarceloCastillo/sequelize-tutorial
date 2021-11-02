const { Comentario } = require("../database/models/index");

module.exports = {
    getAll: async (req, res) => {
        try {
            let data = await Comentario.findAll();
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    getById: async (req, res) => {
        let { id } = req.params;
        try {
            let data = await Comentario.findAll({
                where: { id }
            });
            
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    saveOne: async (req, res) => {
        let { usuario, mensaje, videoId } = req.body;
        try {
            await Comentario.create({ usuario, mensaje, fk_video: videoId });
            res.sendStatus(201);
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}