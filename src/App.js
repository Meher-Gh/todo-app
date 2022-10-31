import "./App.css";
import { useState, useEffect, useRef } from "react";
import InputFieald from "./components/InputFieald";
import uniquid from "uniquid";
import TodoList from "./components/TodoList";
import { Data } from "./Data";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const RefInput = useRef(null);

  const handleTodos = (todos) => {
    setTodos(todos);
  };
  useEffect(() => {
    RefInput.current?.focus();
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos((prevState) => [
        ...prevState,
        { id: uniquid(), todo, isDone: false },
      ]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <main className="App">
      <h3>Todo App</h3>
      <InputFieald todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todo={todo} todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
