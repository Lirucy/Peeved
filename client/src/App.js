import { Route, Switch } from "react-router-dom";
import { userState } from "react";
// import Nav from "./components/Nav";
import Home from "./screens/Home";
// import Register from "./screens/Register";
// import NewPost from "./screens/NewPost";
// import EditPost from "./screens/EditPost";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
          <h3>This is Register!</h3>
          </Route>
          <Route path="/login">
          <h3>This is Login!</h3>
            {/* <Login /> */}
          </Route>
          <Route path="/new-post">
          <h3>This is New Post!</h3>
            {/* <NewPost /> */}
          </Route>
          <Route path="/edit-post/:id">
          <h3>This is Edit/update post!</h3>
            {/* <EditPost /> */}
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
