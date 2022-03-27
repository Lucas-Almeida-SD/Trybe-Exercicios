export const ONHOLD_TODO = 'ONHOLD_TODO';

export const onHoldTodo = (task) => ({
  type: ONHOLD_TODO,
  task,
})