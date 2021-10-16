import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services";
import Post from "../components/Post";

const Home = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
  }, []);
  return (
    <section className="home">
      <h3 id="top-peeve-title">Check out our Top Pet Peeves!</h3>
      <Link to="/easter-egg" ><img id="peeve-pic" src="https://iili.io/5BKRVf.png" alt="Peeved" /></Link>
      <div className="all-posts">
        {posts.map((post) => (
          <Post key={post._id} post={post} user={user} />
        ))}
      </div>
    </section>
  );
};

export default Home;
      
