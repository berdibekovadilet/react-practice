import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Redirect to="/error" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
