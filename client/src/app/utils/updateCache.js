import { GET_TASKS } from "../graphQueries";

export const updateCacheCreate = function(cache, { data: { createTask } }) {
  {
    const query = GET_TASKS;
    const { tasks } = cache.readQuery({ query });
    cache.writeQuery({
      query,
      data: { tasks: tasks.concat([createTask]) }
    });
  }
};
export const updateCacheDelete = function(cache, { data: { deleteTask } }) {
  {
    const query = GET_TASKS;
    const { tasks } = cache.readQuery({ query });
    cache.writeQuery({
      query,
      data: { tasks: tasks.filter(task => task.id !== deleteTask) }
    });
  }
};
export const updateCacheUpdate = function(cache, { data: { updatedTask } }) {
  {
    const query = GET_TASKS;
    const { tasks } = cache.readQuery({ query });
    cache.writeQuery({
      query,
      data: {
        tasks: tasks.map(
          task => (task.id === updatedTask.id ? updatedTask : task)
        )
      }
    });
  }
};
