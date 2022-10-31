import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
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
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("Функция sortedPosts отработала");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [posts, selectedSort]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          style={{ marginBottom: "25px" }}
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {
              value: "title",
              name: "По названию",
            },
            {
              value: "body",
              name: "По описанию",
            },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="Список Постов"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Постов нет</h1>
      )}
    </div>
  );
}

export default App;
