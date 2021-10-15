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

            <h3 id="top-peeve-title">Checkout our Top Pet Peeves!</h3>
            <div>
                {posts.map((post) => (
                    <Post key={post._id} post={post} user={user} />
                ))}
            </div>


        </section>
    );
};

export default Home;