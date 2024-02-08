
import React from "react";
import { createContext, useReducer } from "react";
import { actions, initialState } from "../Action";
import { reducer } from "../Reducers";
import { TodoList } from "../TodoList";

export const TodoListContext = createContext();

export const Provider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
    }
  };

  return (
    <TodoListContext.Provider value={value}>
      <TodoList/>
    </TodoListContext.Provider>
  );
};