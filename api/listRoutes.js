
const express = require("express")
const router = express.Router()

const listController = require("../controller/listController")

router.get("/", listController.findAll);
router.get("/:id", listController.findOne);
router.post("/", listController.createOne);
router.put("/:id",listController.updateOne)
router.delete("/:id",listController.deleteOne)

module.exports = router ;