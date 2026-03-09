import { Request, Response } from "express";
import * as taskService from "../services/task.service";
import { asyncHandler } from "../utils/asyncHandler";
import { createTaskSchema, updateTaskSchema } from "../validations/task.validation";


//  Controller responsible for creating a new task.


export const createTask = asyncHandler(async (req: Request, res: Response) => {

  const data = createTaskSchema.parse(req.body);

  const task = await taskService.createTask(data);

  res.status(201).json(task);
});


//  Retrieves tasks with pagination, filtering
//  searching and sorting by created date


export const getTasks = asyncHandler(async (req: Request, res: Response) => {

  const {
    page = "1",
    limit = "10",
    status,
    search,
    sort = "desc"
  } = req.query;

  const result = await taskService.getTasks({
    page: Number(page),
    limit: Number(limit),
    status: status as string | undefined,
    search: search as string | undefined,
    sort: sort as "asc" | "desc",
  });

  res.json(result);
});



//  Updates the status 

export const updateTaskStatus = asyncHandler(async (req: Request, res: Response) => {

  const { status } = updateTaskSchema.parse(req.body);

  const task = await taskService.updateTaskStatus(req.params.id as string, status);

  res.json(task);
});



//  Deletes  task 

export const deleteTask = asyncHandler(async (req: Request, res: Response) => {

  await taskService.deleteTask(req.params.id as string);

  res.json({ message: "Task deleted successfully" });
});



export const getTaskStats = asyncHandler(async (req: Request, res: Response) => {

  const stats = await taskService.getTaskStats();

  res.json(stats);

});