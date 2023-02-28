import React from "react";

export interface Itodo {
  id: number;
  title: string;
  completed: boolean;
}

type props = {
  todo: Itodo;
};

const Todo: React.FC<props> = ({ todo }) => {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strong>{h1}</strong> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>;
};

export default Todo;
