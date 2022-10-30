import { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
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
    <div className="App">
      <PostList posts={posts} title="Список Постов" />
    </div>
  );
}

export default App;
