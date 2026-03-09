import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import taskRoutes from "./routes/task.routes";
import { errorHandler } from "./middlewares/error.middleware";

/*
Loads environment variables from the .env file.
This must be called before accessing process.env variables.
*/
dotenv.config();

const app = express();

/*
Global middlewares.
These allow JSON parsing and cross-origin requests.
*/
app.use(cors());
app.use(express.json());

/*
Establish database connection before handling requests.
If DB connection fails, the application exits.
*/
connectDB();

/*
Register application routes.
All task related endpoints will start with /api/tasks
*/
app.use("/api/tasks", taskRoutes);

/*
Basic health check endpoint.
Useful for confirming the API server is running.
*/
app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

/*
Global error handler middleware.
This ensures all thrown errors return consistent responses.
*/
app.use(errorHandler);

/*
Start the HTTP server.
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});