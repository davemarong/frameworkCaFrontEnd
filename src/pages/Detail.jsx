import React from "react";
import { useFetchPost } from "../components/customHooks/useFetchPost";
import { Nav } from "../components/Nav/Nav";
import { Post } from "../components/post/Post";

export const Detail = () => {
  const data = useFetchPost();

  return (
    <div>
      <Nav />
      <Post post={data} />
    </div>
  );
};
