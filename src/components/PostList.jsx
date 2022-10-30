import { useState } from "react";
import PostItem from "./PostItem";

const PostList = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.",
    },
    {
      id: 2,
      title: "Phyton",
      body: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.",
    },
    {
      id: 3,
      title: "Php",
      body: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.",
    },
  ]);
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Список Постов</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
