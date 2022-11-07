import "./App.css";
import { useState, useEffect, useRef } from "react";
import InputFieald from "./components/InputFieald";
import uniquid from "uniquid";
import TodoList from "./components/TodoList";
import { Data } from "./Data";
import styled from "styled-components";
import { IoMdWalk } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const RefInput = useRef(null);

  // const handleTodos = (todos) => {
  //   setTodos(todos);
  // };
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

  // return (
  //   <main className="App">
  //     <h3>Todo App</h3>
  //     <InputFieald todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
  //     <TodoList todo={todo} todos={todos} setTodos={setTodos} />
  //   </main>
  // );

  return (
    <>
      <Header>
        <IoMdWalk style={{ height: "100px" }} />
        <h3> Todo by MEHER</h3>
      </Header>
      <AppWrapper>
        <TodoWrapper>
          <TodosList>
            <h4>My List of Todos</h4>
            <AddTodo key={todo.id}>
              <AddButton onClick={(id) => handleAdd(id)}></AddButton>
              <InputFieald
                todo={todo}
                setTodo={setTodo}
                handleAdd={handleAdd}
              />
            </AddTodo>
            {todos.map((todo) => <Todos>{todo.todo}</Todos>).reverse()}
          </TodosList>
          <div>
            <h4>In Proggress</h4>
          </div>
          <div>
            <h4>Done</h4>
          </div>
        </TodoWrapper>
      </AppWrapper>
    </>
  );
}

const Header = styled.header`
  height: 3.5rem;
  margin: 0.5rem 0.7rem;
  padding: 0.2rem 0.7rem;
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  gap: 3px;

  h3 {
    color: #1d1d1d;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 20px;
    font-weight: 400;
  }
`;

const AppWrapper = styled.main`
  /* background-color: #e7e7e7; */
  height: 90vh;
  margin: 1rem 0.7rem;
`;

const TodoWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  gap: 7px;
  div {
    background-color: #e7e7e7;
    height: 90vh;
    width: 33%;
    padding: 0.5rem;
  }
`;

const TodosList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    width: 100%;
    height: 7%;
    max-height: 10%;
    background-color: #f7f7f7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
  }
`;

const AddTodo = styled.div`
  display: flex;
  justify-content: center;
`;

const AddButton = styled(AiOutlinePlusCircle)`
  cursor: pointer;

  :hover {
    scale: 1.1;
  }
`;

const AddInput = styled.input`
  height: 2rem;
  width: 90%;
`;

const Todos = styled.div``;
export default App;
