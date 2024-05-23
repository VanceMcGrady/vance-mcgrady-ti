import React from "react";
import { getPostsForMe } from "../actions/getPostsForMe";
import FeedCard from "./FeedCard";
export default async function Feed() {
  const posts = await getPostsForMe();
  console.log("posts: ", posts);
  return (
    <div className="flex flex-col items-center w-auto mx-30  h-900">
      {posts?.map((post) => {
        return <FeedCard post={post} key={post.id} />;
      })}
    </div>
  );
}
