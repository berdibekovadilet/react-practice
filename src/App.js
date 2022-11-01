import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
