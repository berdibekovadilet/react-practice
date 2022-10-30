import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PostItem
        post={{
          id: 1,
          title: "JavaScript",
          body: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.",
        }}
      />
    </div>
  );
}

export default App;
