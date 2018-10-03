import { defaultTasks } from "./defaultTasks";
import moment from "moment";
let tasks = defaultTasks;
export const resolvers = {
  Query: {
    tasks: () => tasks
  },
  Mutation: {
    createTask: (
      root: any,
      {
        title,
        priority,
        isDone,
        dueDate
      }: {
        title: string;
        priority: number;
        isDone: boolean;
        dueDate: moment.Moment;
      }
    ) => {
      const task = {
        priority,
        isDone,
        dueDate,
        title,
        id: tasks.length
      };
      tasks.push(task);
      return task;
    },
    updateTask: (
      root: any,
      {
        id,
        title,
        priority,
        isDone,
        dueDate
      }: {
        id: number;
        title: string;
        priority: number;
        isDone: boolean;
        dueDate: moment.Moment;
      }
    ) => {
      const updatedTask = {
        priority,
        isDone,
        dueDate,
        title,
        id
      };
      tasks = tasks.map(
        task => (task.id === updatedTask.id ? updatedTask : task)
      );
      return updatedTask;
    },
    deleteTask: (root: any, { id }: { id: number }) => {
      tasks = tasks.filter(task => task.id !== id);
      return id;
    }
  }
};
