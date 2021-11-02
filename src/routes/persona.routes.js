const { Router } = require("express");
const { getAll, saveOne } = require("../controllers/persona.ctrl")

const router = Router();


router.get("/persona", getAll);

router.post("/persona", saveOne);


module.exports = router;