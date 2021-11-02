const { Router } = require("express");
const { getAll, getById, saveOne } = require("../controllers/cometario.ctrl")


const router = Router();

router.get("/comentarios", getAll);

router.get("/comentarios/:id", getById);

router.post("/comentarios", saveOne);


module.exports = router;