import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TodoProps } from "../modules/todos";
import { getTodos } from "../services/todos";

export const useTodos = () =>
  useQuery<TodoProps[], AxiosError>({
    queryKey: ["todos"],
    queryFn: getTodos,
    retry: false,
  });
