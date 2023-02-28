import React from "react";

export interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

type props = {
  todo: TodoProps;
};

export const Todo: React.FC<props> = ({ todo }) => {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strong>{h1}</strong> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>;
};
