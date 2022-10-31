import { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript — мультипарадигменный язык программирования.",
    },
    {
      id: 2,
      title: "Python",
      body: "222 — высокоуровневый язык программирования общего назначения.",
    },
    {
      id: 3,
      title: "111",
      body: "Php — C-подобный скриптовый язык общего назначения.",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("Функция sortedPosts отработала");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [sortedPosts, filter.query]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список Постов"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Постов нет</h1>
      )}
    </div>
  );
}

export default App;
