import React, { memo } from "react";
import styled from "styled-components";
import { MdCheckCircleOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../items";
import moment from "moment/moment";

// import EachTodo from "./EachTodo";
// import Datetime from "react-datetime";
// import { format, formatDistance, formatRelative, subDays } from "date-fns";
// import Moment from "react-moment";

const TodoList = ({
  todos,
  id,
  setTodos,
  taskTodo,
  inProgressTask,
  isDone,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: {
      // id: todos.map((task) => task.id),
      id: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // const handleDelete = (id) => {
  //   setTodos(todos.filter((task) => task.id !== id));
  // };

  return (
    <TodoListElement
      style={{
        opacity: isDragging ? "0.5" : "1",
        background: isDragging ? "gray" : "",
        color: isDragging ? "white" : "",
      }}
      ref={drag}
      key={todos.id}
    >
      <TodoTimer style={{ color: isDragging ? "white" : "" }}>
        {todos.date}
      </TodoTimer>
      <div>
        <TodoIcon />
        <TodoText>{todos.title}</TodoText>
      </div>
      {/* <AiFillDeletee
              onClick={() => {
                handleDelete(task.id);
              }}
            /> */}
    </TodoListElement>
  );
};

const TodoListElement = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.3rem;
  gap: 0.4rem;
  background-color: #f7f7f7;
  min-height: 7%;

  > div {
    padding: 0.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    word-break: break-all;
    gap: 5px;
    height: 100%;
    width: 90%;
  }
`;

const TodoTimer = styled.span`
  color: #7c7c7c;
  text-decoration: underline #e9bc4cb7 2px;
  font-size: 0.6rem;
  letter-spacing: 1.5px;
`;

const TodoIcon = styled(MdCheckCircleOutline)`
  fill: red;
`;
const TodoText = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

const AiFillDeletee = styled(AiFillDelete)`
  height: 35px;
  width: 35px;
`;
export default memo(TodoList);
