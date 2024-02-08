import React, { useContext, useState } from "react";
import { TodoListContext } from "../Provider";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const { todoList, removeTodoItem, markAsCompleted, addTodoItem } =
    useContext(TodoListContext);
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder={"Type and add todo item"}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            addTodoItem(inputValue);
            setInputValue("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((todoItem) => (
            <li
              className={`todoItem ${todoItem.completed ? "completed" : ""}`}
              key={todoItem.id}
              onClick={() => markAsCompleted(todoItem.id)}
            >
              {todoItem.label}
              <button
                className="delete"
                onClick={() => removeTodoItem(todoItem.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
