const { Router } = require("express");
const { Tutorial } = require("../database/db");


const router = Router();

router.get("/tutorials", async (req, res) => {
    try {
        let data = await Tutorial.findAll();
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post("/tutorials", async (req, res) => {

    let { title, description } = req.body;
    try {
        await Tutorial.create({ title, description});
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({ error })
    }
});


module.exports = router;