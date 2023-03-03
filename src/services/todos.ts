// this file contains the backend call for todo
import apiClient from "./http-common";

export const getTodos = () => {
  return apiClient.get(`/todos`).then((res) => res.data);
};
