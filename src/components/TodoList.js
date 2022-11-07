import React from "react";
import EachTodo from "./EachTodo";

const TodoList = ({ todo, todos, setTodos }) => {
  return (
    // <div className="todo-list">
    //   {todos
    //     .map((todo) => (
    //       <EachTodo
    //         todo={todo}
    //         todos={todos}
    //         setTodos={setTodos}
    //         key={todo.id}
    //       />
    //     ))
    //     .reverse()}
    // </div>

    <div className="todo-list">
      {todos.map((todo) => <div>{todo.todo}</div>).reverse()}
    </div>
  );
};

export default TodoList;
