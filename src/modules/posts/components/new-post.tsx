import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useInsertPost } from "../../../hooks/postHooks";

export const NewPost: React.FC = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");

  const newPostMutation = useInsertPost(queryClient, () => setTitle(""));

  const handleSubmit = () => {
    if (title.trim() === "") return;
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
