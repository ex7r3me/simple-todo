"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("./resolvers");
const defaultTasks_1 = require("./defaultTasks");
const TEST_TASK = {
    title: "test task",
    dueDate: null,
    isDone: false,
    priority: 1
};
const NEW_TASK_RETURN = {
    title: "test task",
    dueDate: null,
    isDone: false,
    priority: 1,
    id: 4
};
const UPDATE_TASK = {
    title: "New name",
    dueDate: null,
    isDone: true,
    priority: 0,
    id: 1
};
test("Return task for simple query", () => {
    const output = resolvers_1.resolvers.Query.tasks();
    expect(output).toEqual(defaultTasks_1.defaultTasks);
});
test("Create new task and return increased id", () => {
    const output = resolvers_1.resolvers.Mutation.createTask(null, TEST_TASK);
    expect(output).toEqual(NEW_TASK_RETURN);
});
test("Delete task and return deleted task id", () => {
    const output = resolvers_1.resolvers.Mutation.deleteTask(null, { id: 2 });
    expect(output).toEqual(2);
});
test("Update task and return updated version", () => {
    const output = resolvers_1.resolvers.Mutation.updateTask(null, UPDATE_TASK);
    expect(output).toEqual(UPDATE_TASK);
});
//# sourceMappingURL=resolvers.test.js.map