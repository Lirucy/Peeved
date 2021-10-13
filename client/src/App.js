import { Route, Switch } from "react-router-dom";
import { useState } from 'react'
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
// import EditPost from "./screens/EditPost";
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Nav  user = {user}/>
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
             <Register setUser= {setUser}/> 
          </Route>
          <Route path="/login">
            <Login setUser={setUser}/> 
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="/edit-post/:id">
          <h3>This is Edit/update post!</h3>
            {/* <EditPost /> */}
          </Route>
        </main>
      </Switch>
    </div>
  );
};

export default App;
