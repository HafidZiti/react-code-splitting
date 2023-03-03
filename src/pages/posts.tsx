import React from "react";
import { IPost, Post } from "../modules/posts/components/post";
import { NewPost } from "../modules/posts";
import { usePosts } from "../hooks/postHooks";

const Posts: React.FC = () => {
  const { isLoading, isError, data, error } = usePosts();

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
