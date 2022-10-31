import axios from "axios";
import { useEffect, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/myModal/MyModal";
import "./styles/App.css";
import { usePosts } from "./useHooks/usePosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(responce.data);
  }
  useEffect(() => {
    console.log("USE EFFECT");
    fetchPosts();
  }, []);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список Постов"
      />
    </div>
  );
}

export default App;
