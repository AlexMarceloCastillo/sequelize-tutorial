const { Router } = require("express");
const { getAll, getById, saveOne, testTransaction } = require("../controllers/tutorial.ctrl")

const router = Router();


router.get("/tutorials", getAll);
router.get("/tutorials/:id", getById);

router.post("/tutorials", saveOne);

router.post("/tutorials/transaction", testTransaction);


module.exports = router;