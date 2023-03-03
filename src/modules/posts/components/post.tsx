import React from "react";

export interface IPost {
  id: number;
  userId?: number;
  title: string;
  body?: string;
}

type postProps = {
  post: IPost;
};

export const Post: React.FC<postProps> = ({ post }) => {
  const { id, title } = post;
  return <div data-testid={`post-${id}`}>{title}</div>;
};
