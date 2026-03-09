import { z } from "zod";

/*
 Validation schema for creating a new task.

*/
export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  priority: z.enum(["low", "medium", "high"])
});

/*
 Validation schema for updating task status

*/
export const updateTaskSchema = z.object({
  status: z.enum(["todo", "in-progress", "done"])
});


export const updateTaskFullSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  status: z.enum(["todo", "in-progress", "done"]).optional()
});