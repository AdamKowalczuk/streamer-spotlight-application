const Streamer = require("../models/streamer");

async function getAllStreamers(req, res) {
  try {
    const streamers = await Streamer.find();
    res.json(streamers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getStreamerById(req, res) {
  try {
    const { streamerId } = req.params;
    const streamer = await Streamer.findById(streamerId);
    if (streamer) {
      res.json(streamer);
    } else {
      res.status(404).json({ error: "Streamer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createStreamer(req, res) {
  try {
    const { name, platform, description } = req.body;
    const streamer = await Streamer.create({ name, platform, description });
    res.status(201).json(streamer);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
}

async function voteStreamer(req, res) {
  try {
    const { streamerId } = req.params;
    const { vote } = req.body;
    const streamer = await Streamer.findById(streamerId);
    if (streamer) {
      if (vote === "upvote") {
        streamer.upvotes += 1;
      } else if (vote === "downvote") {
        streamer.downvotes += 1;
      }
      await streamer.save();
      res.json(streamer);
    } else {
      res.status(404).json({ error: "Streamer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllStreamers,
  getStreamerById,
  createStreamer,
  voteStreamer,
};
