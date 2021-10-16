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
import EasterEgg from "./screens/EasterEgg";
import PostDetail from "./screens/PostDetail";
import './App.css';
import "./css/Nav.css"
import './css/Login.css'
import './css/Register.css'
import './css/UserProfile.css'
import './css/NewPost.css'
import './css/EditPost.css'
import './css/ProfilePost.css'
import './css/Home.css' 
import './css/Post.css'

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
          <Route path="/post/:id" >
            <PostDetail user={user} />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="/edit-post/:id">
            <EditPost />
          </Route>
          <Route path="/user-profile">
            <UserProfile user={user} />
          </Route>
          <Route path="/easter-egg">
            <EasterEgg />
          </Route>
        </main>
      </Switch>
    </div>
  );
};

export default App;
