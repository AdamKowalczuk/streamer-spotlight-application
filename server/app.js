const express = require("express");
const mongoose = require("mongoose");
const streamerRoutes = require("./routes/streamers");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

mongoose.connect("mongodb+srv://adamkowalczuk:YmwnlYUkIc8KvYRE@cluster0.h2jgmex.mongodb.net/streamer-spotlight-application", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/streamers", streamerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
