import { resolvers } from "./resolvers";
import { defaultTasks } from "./defaultTasks";
import * as moment from "moment";
const TEST_TASK: {
  title: string;
  dueDate: moment.Moment;
  isDone: boolean;
  priority: number;
} = {
  title: "test task",
  dueDate: null,
  isDone: false,
  priority: 1
};
const NEW_TASK_RETURN: {
  title: string;
  dueDate: moment.Moment;
  isDone: boolean;
  priority: number;
  id: number;
} = {
  title: "test task",
  dueDate: null,
  isDone: false,
  priority: 1,
  id: 4
};
const UPDATE_TASK: {
  title: string;
  dueDate: moment.Moment;
  isDone: boolean;
  priority: number;
  id: number;
} = {
  title: "New name",
  dueDate: null,
  isDone: true,
  priority: 0,
  id: 1
};
test("Return task for simple query", () => {
  const output = resolvers.Query.tasks();
  expect(output).toEqual(defaultTasks);
});
test("Create new task and return increased id", () => {
  const output = resolvers.Mutation.createTask(null, TEST_TASK);
  expect(output).toEqual(NEW_TASK_RETURN);
});
test("Delete task and return deleted task id", () => {
  const output = resolvers.Mutation.deleteTask(null, { id: 2 });
  expect(output).toEqual(2);
});
test("Update task and return updated version", () => {
  const output = resolvers.Mutation.updateTask(null, UPDATE_TASK);
  expect(output).toEqual(UPDATE_TASK);
});
