import React from "react";
import { getPostsForMe } from "../actions/getPostsForMe";
import FeedCard from "./FeedCard";
export default async function Feed() {
  const posts = await getPostsForMe();
  console.log("posts: ", posts);
  return (
    <div>
      {posts?.map((post) => {
        return <FeedCard post={post} key={post.id} />;
      })}
    </div>
  );
}
