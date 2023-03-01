import React from "react";
import { Todo, TodoProps } from "../modules/todos";

const Todos: React.FC = () => {
  const todos: TodoProps[] = [
    { id: 1, title: "todo-1", completed: false },
    { id: 2, title: "todo-2", completed: true },
    { id: 3, title: "todo-3", completed: false },
  ];

  return (
    <>
      <h3>Todos</h3>
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo}></Todo>
      ))}
    </>
  );
};

export default Todos;
