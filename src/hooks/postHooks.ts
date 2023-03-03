import { QueryClient } from "@tanstack/query-core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IPost } from "../modules/posts";
import { getPosts, newPost } from "../services/posts";

export const usePosts = () =>
  useQuery<IPost[], AxiosError>({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

export const useInsertPost = (client: QueryClient, action: () => void) => {
  return useMutation({
    mutationFn: newPost,
    onSuccess: (data) => {
      // Replace optimistic Post in the posts list with the result
      client.setQueryData<IPost[]>(["posts"], (oldPosts) => [
        data,
        ...(!!oldPosts ? oldPosts : []),
      ]);
      action();
    },
  });
};
