# Student Portal App

A simple full-stack app with a frontend, backend, database, and visual database viewer.

## How to Run

1. Make sure **Docker** is installed and running.
2. Download or copy the `docker-compose.yml` file into an empty folder.
3. Open your terminal in that folder and run:
   ```bash
   docker compose up -d


   ## Service URLs 🌐

* **Frontend Web App:** http://localhost:3000
* **Backend API (Students):** http://localhost:5000/api/students
* **Database Viewer (Pgweb UI):** http://localhost:8081
* **PostgreSQL Direct Connection:** `localhost:5432` (internal host: `dbxy`, db: `studentdb`, user: `postgresx`, pass: `mypassword`)
