"use client";

import React from "react";
import { Post } from "../mock_data/data";

type FeedCardProps = { post: Post; key: number };

export default function FeedCard({ post, key }: FeedCardProps) {
  const [detialView, setDetailView] = React.useState(false);

  return (
    <>
      <div className="flex flex-col w-full max-w-96 justify-center items-center my-2 px-2 py-5 border-2 border-indigo-50 rounded">
        <h4>{post.user}</h4>
        <p>{post.text}</p>
        <div>
          {detialView && (
            <div className="flex flex-row font-size-small gap-x-1">
              <p>Likes: {post.likes}</p>
              <p>Date: {post.date}</p>
              <p>Time: {post.time}</p>
            </div>
          )}
          <button
            onClick={(e) => {
              setDetailView(!detialView);
            }}
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}
