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
  const p = <p>{title}</p>;
  const text = completed ? <strong>{p}</strong> : p;
  return <div data-testid={`todo-${id}`}>{text}</div>;
};
