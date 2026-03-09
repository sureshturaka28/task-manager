import mongoose, { Document } from "mongoose";


export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

/*
 Interface representing a Task document stored in MongoDB.

*/
export interface ITask extends Document {
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: Date;
}

/*
 Task schema definition.

  1. title is required
  2. status defaults to "todo"


*/
const taskSchema = new mongoose.Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true 
    },
    description: {
      type: String
    },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo"
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true
    }
  },
  {
    
    timestamps: { createdAt: true, updatedAt: false }
  }
);

/*
 Creating and exporting the Task model.
 This will be used across services and controllers.
*/
export const Task = mongoose.model<ITask>("Task", taskSchema);