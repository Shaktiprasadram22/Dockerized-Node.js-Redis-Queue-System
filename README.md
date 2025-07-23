# 📦 Dockerized Node.js Redis Queue System

## 🚀 Overview

This is a simple beginner-friendly project showing how to build a **producer-consumer queue system** using **Node.js**, **Redis**, and **Docker**. The producer pushes tasks to a Redis queue, and a worker consumes and processes them asynchronously.

---

## 📌 Features

- Exposes an **HTTP API** to enqueue tasks.
- Uses **Redis** to store tasks in a queue.
- A **worker** fetches and processes tasks in the background.
- Fully **Dockerized** using Docker & Docker Compose.
- Easily **scalable** by adding more worker containers.

---

## 🛠️ Tech Stack

- **Node.js** — Backend & Worker
- **Redis** — Queue storage
- **Docker**, **Docker Compose**

---

## 📂 Folder Structure (Single Repo)

```plaintext
.
├── producer.js       # Express API to push tasks
├── consumer.js       # Worker to process tasks
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## How It Works

### 1️⃣ Producer

- Runs an Express server.
- API: `POST /enqueue?task=TaskName`
- Pushes tasks to a Redis list.

### 2️⃣ Consumer

- Runs a simple Node.js script.
- Loops: pulls tasks from Redis.
- Logs them as "processed".

## 🐳 How to Run

Clone & start:

```bash
git clone <repo_url>
cd <project_folder>
docker-compose up --build
```

Producer API → http://localhost:3000/enqueue?task=HelloWorld

Scale more workers:

```bash
docker-compose up --scale consumer=3
```

## ✅ Example API Call

```bash
curl "http://localhost:3000/enqueue?task=HelloDocker"
```

Check worker logs:

```bash
docker-compose logs -f consumer
```

## 📚 What You Learn

✅ Redis + Node.js integration  
✅ Asynchronous task queues  
✅ Dockerize Node apps  
✅ Use Docker Compose to run multi-service apps  
✅ Scale workers easily

## 💡 Future Scope

- Add DB to store task status.
- Add monitoring dashboard.
- Replace Redis with RabbitMQ for advanced queuing.

