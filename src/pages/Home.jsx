import React from "react";
import { useFetchPosts } from "../components/customHooks/useFetchPosts";
import { Nav } from "../components/Nav/Nav";
import { Posts } from "../components/posts/Posts";

export const Home = () => {
  const data = useFetchPosts();
  return (
    <div>
      <Nav />
      <Posts posts={data} />
    </div>
  );
};
