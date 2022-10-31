import React, { useState } from "react";
import uniquid from "uniquid";
import { Data } from "../Data";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const EachTodo = ({ todo, todos, setTodos, id }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
  };

  return (
    <form className="form-todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      <ul className="todo-list_task">
        {todos.map((todo) => (
          <div key={todo.id}>
            <li>{todo.todo}</li>
            <div>
              <AiFillDelete
                className="btn"
                onClick={() => handleDelete(todo.id)}
              >
                ss
              </AiFillDelete>
              <AiFillEdit className="btn"></AiFillEdit>
            </div>
          </div>
        ))}
      </ul>
    </form>
  );
};

export default EachTodo;
