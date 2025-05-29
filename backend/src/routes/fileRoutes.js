const express = require("express");
const router = express.Router();
const FileController = require("../controllers/FileController");

const controller = new FileController();

router.get("/data", (req, res) => controller.getFilesData(req, res));

module.exports = router;
