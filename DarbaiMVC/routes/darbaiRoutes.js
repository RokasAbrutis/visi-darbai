const express = require('express');
const router = express.Router();
const controller = require("./../controllers/darbaiController")

router.get("/", controller.getList)
router.get("/atlikta/:id", controller.atlikta)
router.get("/naujas", controller.naujas)
router.post("/", controller.prideti)


module.exports = router;