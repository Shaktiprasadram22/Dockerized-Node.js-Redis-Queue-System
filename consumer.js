const Redis = require("ioredis");

const redis = new Redis({ host: "redis" });

async function consume() {
  while (true) {
    const task = await redis.brpop("tasks", 0);
    console.log(`Processing task: ${task[1]}`);
  }
}

consume();
