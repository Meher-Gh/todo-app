import React from "react";
import EachTodo from "./EachTodo";

const TodoList = ({ todo, todos, setTodos }) => {
  return (
    <div className="todo-list">
      <h2>TASKS</h2>
      <EachTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
    </div>
  );
};

export default TodoList;
