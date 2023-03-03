import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Todo, TodoProps } from "../modules/todos";
import { getTodos } from "../services/todos";

const Todos: React.FC = () => {
  // Queries
  const { isLoading, isError, data, error } = useQuery<TodoProps[], AxiosError>(
    {
      queryKey: ["todos"],
      queryFn: getTodos,
      retry: false,
    }
  );

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
