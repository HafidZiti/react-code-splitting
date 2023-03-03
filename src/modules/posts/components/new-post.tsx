import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { newPost } from "../../../services/posts";
import { IPost } from "./post";

export const NewPost: React.FC = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");

  const newPostMutation = useMutation({
    mutationFn: newPost,
    onSuccess: (data) => {
      // Replace optimistic Post in the posts list with the result
      setTitle("");
      queryClient.setQueryData<IPost[]>(["posts"], (oldPosts) => [
        data,
        ...(!!oldPosts ? oldPosts : []),
      ]);
    },
  });

  const handleSubmit = () => {
    if(title.trim() === "") return;
    newPostMutation.mutate({ id: 4, title, body: "", userId: 5 });
  };

  return (
    <>
      <div>
        <label htmlFor="post-title">Poste title</label>
      </div>
      <div>
        <input
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <button disabled={newPostMutation.isLoading} onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};
