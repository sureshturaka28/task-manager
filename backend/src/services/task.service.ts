import { Task } from "../models/task.model";

/*
 Works for creation of a new task
*/
export const createTask = async (data: any) => {
  return await Task.create(data);
};


/*
 Fetch tasks with pagination, filtering
 searching and sorting support

*/
export const getTasks = async (query: any) => {

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  const filter: any = {};

  // Filter tasks by status
  if (query.status) {
    filter.status = query.status;
  }

  // Case-insensitive search by title
  if (query.search) {
    filter.title = { $regex: query.search, $options: "i" };
  }

  /*
  Determine sorting order
  desc → newest 
  asc → oldest 
  */
  const sortOrder = query.sort === "asc" ? 1 : -1;

  const tasks = await Task.find(filter)
    .sort({ createdAt: sortOrder })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Task.countDocuments(filter);

  return {
    tasks,
    page,
    limit,
    total
  };
};


/*
 Updates only the task status.
*/
export const updateTaskStatus = async (id: string, status: string) => {

  return await Task.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};


/*
 Deletes a task from the database.
*/
export const deleteTask = async (id: string) => {
  return await Task.findByIdAndDelete(id);
};


export const getTaskStats = async () => {

  const total = await Task.countDocuments();

  const todo = await Task.countDocuments({ status: "todo" });

  const inProgress = await Task.countDocuments({ status: "in-progress" });

  const done = await Task.countDocuments({ status: "done" });

  return {
    total,
    todo,
    inProgress,
    done
  };
};