const { Router } = require("express");
const { Comment } = require("../database/db");


const router = Router();

router.get("/comments", async (req, res) => {
    try {
        let data = await Comment.findAll();
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post("/comments", async (req, res) => {

    let { name, text, tutorialId } = req.body;
    try {
        await Comment.create({ name, text, tutorialId});
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({ error })
    }
});


module.exports = router;