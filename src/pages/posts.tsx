import React from "react";
import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { IPost, Post } from "../modules/posts/components/post";
import { getPosts } from "../services/posts";
import { NewPost } from "../modules/posts";

const Posts: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<IPost[], AxiosError>({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <>
      <h1>Posts</h1>
      {isError && error.message}
      <NewPost></NewPost>
      <br />
      <br />
      {isLoading ? (
        <h3>Todos list is loading!</h3>
      ) : (
        data?.map((post: IPost, i: number) => <Post key={i} post={post}></Post>)
      )}
    </>
  );
};
export default Posts;
