import React, { useState } from "react";
import { CompleteTodo } from "./componets/completeTodo";
import { IncompleteTodo } from "./componets/incompleteTodo";
import { InputTodo } from "./componets/inputTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodos];
    newIncompleteTodo.splice(index, 1);

    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodo);
  };
  const onClickBack = (index) => {
    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];

    const newCompleteTodo = [...completeTodos];
    newCompleteTodo.splice(index, 1);
    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodo);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
