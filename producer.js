const express = require("express");
const Redis = require("ioredis");

const app = express();
const redis = new Redis({ host: "redis" });

app.get("/enqueue", async (req, res) => {
  const task = req.query.task || "DefaultTask";
  await redis.lpush("tasks", task);
  res.send(`Enqueued task: ${task}`);
});

app.listen(3000, () => {
  console.log("Producer running on port 3000");
});
