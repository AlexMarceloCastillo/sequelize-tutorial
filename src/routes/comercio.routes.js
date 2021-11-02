const { Router } = require("express");
const { getAll, saveOne } = require("../controllers/comercio.ctrl")

const router = Router();


router.get("/comercio", getAll);

router.post("/comercio", saveOne);


module.exports = router;