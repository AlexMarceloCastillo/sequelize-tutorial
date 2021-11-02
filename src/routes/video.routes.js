const { Router } = require("express");
const { getAll, getById, saveOne, testTransaction } = require("../controllers/video.ctrl")

const router = Router();


router.get("/videos", getAll);
router.get("/videos/:id", getById);

router.post("/videos", saveOne);

router.post("/videos/transaction", testTransaction);


module.exports = router;