const { Persona, sequelize } = require("../database/models/index");

module.exports = {
    getAll: async (req, res) => {
        try {
            let data = await Persona.findAll();
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    saveOne: async (req, res) => {
        let { nombre, email, domicilio } = req.body;
        try {
            // otra forma de manejar "transacciones"
            const result = await sequelize.transaction( async (t) => {
                let persona = await Persona.create({ nombre, email, domicilio },{
                    include : "domicilio"
                },{
                    include: Persona.Domicilio
                });

                return persona;
            });
            
            res.send(201).json({data:result});
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}