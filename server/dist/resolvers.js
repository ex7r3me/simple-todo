"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultTasks_1 = require("./defaultTasks");
let tasks = defaultTasks_1.defaultTasks;
exports.resolvers = {
    Query: {
        tasks: () => tasks
    },
    Mutation: {
        createTask: (root, { title, priority, isDone, dueDate }) => {
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
        updateTask: (root, { id, title, priority, isDone, dueDate }) => {
            const updatedTask = {
                priority,
                isDone,
                dueDate,
                title,
                id
            };
            tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
            return updatedTask;
        },
        deleteTask: (root, { id }) => {
            tasks = tasks.filter(task => task.id !== id);
            return id;
        }
    }
};
//# sourceMappingURL=resolvers.js.map