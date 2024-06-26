"use server";

import { error } from "console";
import { allPosts } from "../mock_data/data";
import { Post } from "../mock_data/data";
export async function getAllPosts() {
  // this is where we would make some query to the db to return posts within certain parameters
  // like posts within a certain time-frame. I would elect to use some postgres client and make a sql query
  // something like const data = await sql`SELECT * FROM POSTS WHERE post.time is within x range`
  // return all posts from friends
  try {
    return allPosts;
  } catch {
    // send to monitoring system of choice
    console.log("error in getAllPosts: ", error);
  }
}
