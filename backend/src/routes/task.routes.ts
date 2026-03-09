import express from "express";
import * as taskController from "../controllers/task.controller";

const router = express.Router();

/*
 Route to create a new task
*/
router.post("/", taskController.createTask);

/*
 Route to fetch tasks

*/
router.get("/", taskController.getTasks);

/*
 Route to update task status
*/
router.patch("/:id", taskController.updateTaskStatus);

/*
 Route to delete a task
*/
router.delete("/:id", taskController.deleteTask);

/*
 Route to Fetch stats
*/

router.get("/stats", taskController.getTaskStats);

export default router;