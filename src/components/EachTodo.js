import React, { useState, useRef, useEffect } from "react";
import uniquid from "uniquid";
import { Data } from "../Data";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const EachTodo = ({ todo, todos, setTodos, id }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  console.log(edit);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="form-todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todo-edit"
        />
      ) : todo.isDone ? (
        <ul className=" todo-list_task">
          <div>
            <s className="todo-list-task-li" style={{ color: "red" }}>
              {todo.todo}
            </s>
          </div>
        </ul>
      ) : (
        <ul className="todo-list_task">
          <div key={todo.id}>
            <li className="todo-list-task-li">{todo.todo}</li>
          </div>
        </ul>
      )}
      <div className="btns">
        <AiFillEdit
          className="btn"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        />
        <AiFillDelete className="btn" onClick={() => handleDelete(todo.id)} />
        <MdDone className="btn" onClick={() => handleDone(todo.id)} />
      </div>
    </form>
  );

  // return (
  //   // <form className="form-todo" onSubmit={(e) => handleEdit(e, todo.id)}>
  //   //   <ul className="todo-list_task">
  //   //     {todos.map((todo) => (
  //   //       <div key={todo.id}>
  //   //         <li className="todo-list-task-li">{todo.todo}</li>
  //   //         <div className="btns">
  //   //           <AiFillDelete
  //   //             className="btn"
  //   //             onClick={() => handleDelete(todo.id)}
  //   //           >
  //   //             ss
  //   //           </AiFillDelete>
  //   //           <AiFillEdit className="btn"></AiFillEdit>
  //   //           <MdDone className="btn" onClick={() => handleDone(todo.id)} />
  //   //         </div>
  //   //       </div>
  //   //     ))}
  //   //   </ul>
  //   // </form>
  // );
};

export default EachTodo;
