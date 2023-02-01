// import "./App.css";
import { useState, useEffect, useRef } from "react";
import InputFieald from "./components/InputFieald";
import uniquid from "uniquid";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import { IoMdWalk } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import moment from "moment/moment";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import InProgress from "./components/InProgress";
import { ItemTypes } from "./items";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskTodo, setTaskTodo] = useState(true);
  const [inProgressTask, setInProgressTask] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const RefInput = useRef(null);

  // const handleTodos = (todos) => {
  //   setTodos(todos);
  // };
  useEffect(() => {
    RefInput.current?.focus();
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    if (todoText) {
      const date = moment().format("MMMM Do YYYY, h:mm:ss");
      setTodos((prevState) => [
        ...prevState,
        {
          id: uniquid(),
          title: todoText,
          date,
          taskTodo: taskTodo,
          inProgressTask: inProgressTask,
          isDone: isDone,
          //add the states to check for todos status : taskTodo, inProgress and isDone
        },
      ]);
      setTodoText("");
      setTaskTodo(true);
      setInProgressTask(true);
      setIsDone(false);
    }
  };

  const markAsInProgress = (id) => {
    const task = todos.filter((task) =>
      task.id === id
        ? setInProgressTask(true) && setTaskTodo(false)
        : setTaskTodo(true) && setInProgressTask(false)
    );
  };

  return (
    <>
      <Header>
        <IoMdWalk style={{ height: "100px" }} />
        <h3> Task Manager: Dotsup</h3>
      </Header>
      <DndProvider backend={HTML5Backend}>
        <AppWrapper>
          <TodoWrapper>
            <TodosList>
              <h4>My List of Todos</h4>
              <AddTodo>
                <AddButton onClick={handleAdd}></AddButton>
                <InputFieald
                  todo={todoText}
                  setTodo={setTodoText}
                  handleAdd={handleAdd}
                />
              </AddTodo>
              {/* my list of todos */}
              {todos
                .filter((task) => task && taskTodo)
                .map((task) => (
                  <TodoList
                    id={todos.map((task) => task.id)}
                    key={task.id}
                    todos={task}
                    setTodos={setTodos}
                    taskTodo={taskTodo}
                    inProgressTask={inProgressTask}
                    isDone={isDone}
                  />
                ))
                .reverse()}
            </TodosList>

            <InProgressList>
              {/* my inProgress list */}
              <h4>In Proggress</h4>
              {/* {todos
                .filter((task) => task && inProgressTask)
                .map((task) => (
                  <InProgress
                    id={todos.map((task) => task.id)}
                    key={task.id}
                    todos={task}
                    setTodos={setTodos}
                    taskTodo={taskTodo}
                    inProgressTask={inProgressTask}
                    isDone={isDone}
                  />
                ))} */}
              {todos.map((task) => (
                <InProgress
                  id={todos.map((task) => task.id)}
                  key={task.id}
                  todos={task}
                  setTodos={setTodos}
                  taskTodo={taskTodo}
                />
              ))}
            </InProgressList>

            <div>
              <h4>Done</h4>
            </div>
          </TodoWrapper>
        </AppWrapper>
      </DndProvider>
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
  > div {
    background-color: #e7e7e7;
    height: 90vh;
    width: 33%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;
  }
`;

const TodosList = styled.div`
  /* div {
    width: 90%;
    height: 7%;
    max-height: 12%;
    background-color: #f7f7f7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
  } */
`;

const AddTodo = styled.div`
  background-color: #f7f7f7;
  padding: 0.7rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  border-radius: 15px;
  border: 1px solid green;
`;

const AddButton = styled(AiOutlinePlusCircle)`
  cursor: pointer;
  fill: green;
  transition: all 0.25s;

  :hover {
    scale: 1.2;
  }
`;

const Todos = styled.div`
  background-color: blue;
  width: 100%;
  height: 15%;
  border-radius: 5px;
`;

const InProgressList = styled(TodosList)``;
export default App;
