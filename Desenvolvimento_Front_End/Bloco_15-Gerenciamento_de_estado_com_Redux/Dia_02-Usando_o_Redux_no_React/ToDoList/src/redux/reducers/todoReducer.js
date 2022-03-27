import { ADD_TODO } from "../actions/addTodo";
import { SELECT_TODO } from "../actions/selectTodo";
import { REMOVE_TODO } from "../actions/removeTodo";
import { CONCLUDE_TODO } from "../actions/concludeTodo";
import { PROGRESS_TODO } from "../actions/progressTodo";
import { ONHOLD_TODO } from "../actions/onholdTodo";

const INNITIAL_STATE = {
  todoList: [],
}

const todoReducer = (state = INNITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.todo],
      };

    case SELECT_TODO:
      const newTodoListWithSelected= state.todoList.map((e) => {
        if (e.task === action.task) {
          return {...e, isSelected: !e.isSelected}
        }
        return e;
      });
      return {
        ...state,
        todoList: newTodoListWithSelected,
      };

    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((e) => e.task !== action.task),
      };

    case CONCLUDE_TODO:
      const newTodoListWithConclude = state.todoList.map((e) => (
        (e.task === action.task)
          ? { ...e, status: 'concluidas', isSelected: false } : e
      ));
      return {
        ...state,
        todoList: newTodoListWithConclude,
      };

    case PROGRESS_TODO:
      const newTodoListWithProgress = state.todoList.map((e) => (
        (e.task === action.task)
          ? { ...e, status: 'progresso', isSelected: false } : e
      ));
      return {
        ...state,
        todoList: newTodoListWithProgress,
      };

    case ONHOLD_TODO:
      const newTodoListWithOnHold = state.todoList.map((e) => (
        (e.task === action.task)
          ? {...e, status: 'espera', isSelected: false } : e
      ))
      return {
        ...state,
        todoList: newTodoListWithOnHold,
      };

    default: return state;
  }
}

export default todoReducer;