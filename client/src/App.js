import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react'
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import UserProfile from "./screens/UserProfile";
import { verifyUser } from "./services"; 
import EditPost from "./screens/EditPost";
import './App.css';
import "./css/Nav.css"
import './css/Login.css'
import './css/Register.css'
import './css/UserProfile.css'


function App() {

  const [user, setUser] = useState(null)
  // const [post, setPost] = useState(null)

  useEffect (() => {
    verifyUser().then((verifiedUser) => setUser(verifiedUser));
  }, []);

  return (
    <div className="App">
      <Nav  user = {user} setUser={setUser}/>
      <Switch>
        <main>
          <Route exact path="/">
            <Home user = {user} />
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
            <EditPost />
          </Route>
          <Route path="/user-profile">
            <UserProfile user={user} />
          </Route>
        </main>
      </Switch>
    </div>
  );
};

export default App;
