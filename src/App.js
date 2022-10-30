import { useState } from "react";
import "./styles/App.css";

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <div>{likes}</div>
      <button onClick={() => setLikes(likes + 1)}>Increment</button>
      <button onClick={() => setLikes(likes - 1)}>Decrement</button>
    </div>
  );
}

export default App;
