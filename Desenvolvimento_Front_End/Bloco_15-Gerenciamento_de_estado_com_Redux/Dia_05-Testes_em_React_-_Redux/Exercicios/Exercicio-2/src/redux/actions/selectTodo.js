export const SELECT_TODO = 'SELECT_TODO';

export const selectTodo = (task) => ({
  type: SELECT_TODO,
  task,
})