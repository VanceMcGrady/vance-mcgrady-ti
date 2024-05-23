"use client";

import React from "react";
import { Post } from "../mock_data/data";

type FeedCardProps = { post: Post; key: number };

export default function FeedCard({ post, key }: FeedCardProps) {
  const [detailView, setDetailView] = React.useState(false);

  return (
    <>
      <div className="flex flex-col w-full max-w-96 justify-center items-center my-2 px-2 py-5 border-2 border-indigo-50 rounded">
        <h4 className="text-xl">{post.user}</h4>
        <p className="m-1">{post.text}</p>
        <div className="my-1">
          {detailView && (
            <div className="flex flex-row font-size-small gap-x-1">
              <p>Likes: {post.likes}</p>
              <p>Date: {post.date}</p>
              <p>Time: {post.time}</p>
            </div>
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            setDetailView(!detailView);
          }}
        >
          Details
        </button>
      </div>
    </>
  );
}
