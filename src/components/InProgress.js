import React from "react";
import TodoList from "./TodoList";
import styled from "styled-components";
import { MdCheckCircleOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../items";

const InProgress = (todos, setTodos, taskTodo, inProgressTask, isDone) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <InProgressContainer
      ref={drop}
      style={{
        background: isOver ? "yellow" : "",
        opacity: isOver ? "0.3" : "1",
      }}
    >
      <TodoList key={todos.id} todos={todos} />
    </InProgressContainer>
  );
};

const InProgressContainer = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  div {
    height: 60%;
  }
`;

const InProgressList = styled.div``;

export default InProgress;
