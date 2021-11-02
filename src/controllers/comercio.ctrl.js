const { Comercio, Persona, sequelize } = require("../database/models/index");

module.exports = {
    getAll: async (req, res) => {
        try {
            let data = await Comercio.findAll();
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    saveOne: async (req, res) => {
        let { establecimiento, personas } = req.body;
        try {
            // otra forma de manejar "transacciones"
            const result = await sequelize.transaction( async (t) => {
                let comercio = await Comercio.create({ establecimiento });

                let per1 = await Persona.create(personas[0]);
                let per2 = await Persona.create(personas[1]);

                comercio.addPersonas([per1,per2]);
                
                return comercio;
            });
            

            res.send(201).json({data:result});
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}