import React from "react";
import { getPostsForMe } from "../actions/getPostsForMe";
export default async function Feed() {
  const posts = await getPostsForMe();
  console.log("posts: ", posts);
  return (
    <div>
      {posts?.map((post) => {
        return <p>{post.text}</p>;
      })}
    </div>
  );
}
