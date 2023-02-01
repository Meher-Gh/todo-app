import React, { useRef } from "react";
import styled from "styled-components";

const InputFieald = ({ todo, setTodo, handleAdd }) => {
  const RefInput = useRef(null);

  return (
    <Form
      onSubmit={(e) => {
        handleAdd(e);
        RefInput.current?.focus();
      }}
    >
      <input
        ref={RefInput}
        type="input"
        placeholder=" type your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value.toUpperCase())}
      />
    </Form>
  );
};

const Form = styled.form`
  input {
    height: 2rem;
    border-radius: 15px;
    width: 100%;
    font-size: 1rem;
    border: 1px solid green;
  }
`;
export default InputFieald;
