import React, { useEffect, useRef } from "react";

const InputFieald = ({ todo, setTodo, handleAdd }) => {
  const RefInput = useRef(null);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleAdd(e);
        RefInput.current?.blur();
      }}
    >
      <input
        className="form-input"
        ref={RefInput}
        type="input"
        placeholder="type your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="form-btn" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFieald;
