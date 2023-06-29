const express = require("express");
const router = express.Router();
const streamersController = require("../controllers/streamers");

router.get("/", streamersController.getAllStreamers);
router.get("/:streamerId", streamersController.getStreamerById);
router.post("/", streamersController.createStreamer);
router.put("/:streamerId/vote", streamersController.voteStreamer);

module.exports = router;
