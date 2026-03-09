# MERN Task Manager

A full-stack Task Manager application built using the **MERN stack** (MongoDB, Express, React, Node.js).
The application allows users to create, update, delete, and manage tasks with filtering, pagination, and sorting features.

---

## Features

### Backend

* RESTful API built with **Node.js + Express**
* **MongoDB + Mongoose** for database
* **Zod validation**
* Pagination support
* Filter tasks by status
* Sort tasks by created date
* Search tasks by title
* Task statistics endpoint

### Frontend

* Built with **React + TypeScript**
* **TailwindCSS** modern UI
* Task creation form with validation
* Task cards with status & priority
* Real-time updates
* Pagination
* Search and filter
* Sorting by created date
* Toast notifications
* Loading skeleton UI
* Responsive dashboard

---

# Project Structure

```
project-root
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── validations
│   └── server.ts
│
├── frontend
│   ├── components
│   ├── pages
│   ├── api
│   ├── utils
│   └── App.tsx
```

---

# Installation

Clone the repository

```
git clone <[repository-url](https://github.com/sureshturaka28/task-manager.git)>
cd task-manager
```

---

# Backend Setup

Navigate to backend folder

```
cd backend
```

Install dependencies

```
npm install
```



# Environment Variables

Create a `.env` file in the backend folder.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string/task-manager
```

Start backend server

```
npm run dev
```

Backend will run on

```
http://localhost:5000
```

---

# Frontend Setup

Open a new terminal and navigate to frontend folder

```
cd frontend
```

Install dependencies

```
npm install
```

Start the frontend

```
npm run dev
```

Frontend will run on

```
http://localhost:5173
```

---

# API Endpoints

### Create Task

```
POST /api/tasks
```

### Get Tasks

Supports pagination, search, filtering, and sorting

```
GET /api/tasks?page=1&limit=10
GET /api/tasks?status=todo
GET /api/tasks?search=react
GET /api/tasks?sort=asc
GET /api/tasks?sort=desc
```

### Update Task Status

```
PATCH /api/tasks/:id
```

### Delete Task

```
DELETE /api/tasks/:id
```

### Task Statistics

```
GET /api/tasks/stats
```

---



---

# Tech Stack

Frontend:

* React
* TypeScript
* TailwindCSS
* Axios
* React Hook Form
* Zod
* React Hot Toast

Backend:

* Node.js
* Express
* MongoDB
* Mongoose
* Zod


