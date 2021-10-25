const { Router } = require("express");
const { getAll, getById, saveOne} = require("../controllers/comment.ctrl")


const router = Router();

router.get("/comments", getAll);

router.get("/comments/:id", getById);

router.post("/comments", saveOne);


module.exports = router;