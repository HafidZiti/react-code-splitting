import { IPost } from "../modules/posts";
import apiClient from "./http-common";

export const getPosts = () => {
  return apiClient.get(`/posts`).then((res) => res.data);
};

export const newPost = (post: IPost) => {
  return apiClient.post(`/posts`, post).then((res) => res.data);
};
