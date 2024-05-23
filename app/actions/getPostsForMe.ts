"use server";
import { getAllPosts } from "./getAllPosts";
import { getMe } from "./getMe";

export async function getPostsForMe() {
  // authorize me
  const me = await getMe();

  // I would use the same method as in getAllPosts() but with different query terms
  const allPosts = await getAllPosts();

  const postsForMe = allPosts?.filter((post) => {
    // return array of posts whose user is in your friends list
    return me?.friends.includes(post.user);
  });

  return postsForMe;
}
