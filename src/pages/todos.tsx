import React from "react";
import { Todo, TodoProps } from "../modules/todos";
import { useTodos } from "../hooks/todoHooks";

const Todos: React.FC = () => {
  // Queries
  const { isLoading, isError, data, error } = useTodos();

  return (
    <>
      <h1>Todos</h1>
      {isError && error.message}
      {isLoading ? (
        <h3>Todos list is loading!</h3>
      ) : (
        data?.map((todo: TodoProps, i: number) => (
          <Todo key={i} todo={todo}></Todo>
        ))
      )}
    </>
  );
};

export default Todos;
