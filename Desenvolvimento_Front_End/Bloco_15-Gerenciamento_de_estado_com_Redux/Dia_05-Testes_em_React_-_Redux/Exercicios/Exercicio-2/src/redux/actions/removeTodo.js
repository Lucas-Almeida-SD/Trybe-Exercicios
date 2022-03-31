export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = (task) => ({
  type: REMOVE_TODO,
  task,
});