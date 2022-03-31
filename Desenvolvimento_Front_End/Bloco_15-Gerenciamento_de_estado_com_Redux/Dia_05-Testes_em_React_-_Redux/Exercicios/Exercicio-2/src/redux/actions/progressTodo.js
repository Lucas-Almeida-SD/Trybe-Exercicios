export const PROGRESS_TODO = 'PROGRESS_TODO';

export const progressTodo = (task) => ({
  type: PROGRESS_TODO,
  task,
})