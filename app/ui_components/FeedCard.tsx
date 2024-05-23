import React from "react";
import { Post } from "../mock_data/data";

type FeedCardProps = { post: Post; key: number };

export default function FeedCard({ post, key }: FeedCardProps) {
  return (
    <div className="flex flex-col w-full max-w-96 justify-center items-center my-2 px-2 py-5 border-2 border-indigo-50 rounded">
      <h4>{post.user}</h4>
      <p>{post.text}</p>
    </div>
  );
}
