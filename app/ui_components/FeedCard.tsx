import React from "react";
import { Post } from "../mock_data/data";

type FeedCardProps = { post: Post; key: number };

export default function FeedCard({ post, key }: FeedCardProps) {
  return <div>FeedCard</div>;
}
