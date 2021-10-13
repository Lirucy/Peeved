import { useEffect, useState } from "react";
import { getAllPosts } from "../services";
import Post from "../components/Post";
import '../screens/Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
    }, []);
    return (
        <section className="home">
            <h3>Checkout our Top Pet Peeves!</h3>
            <div>
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </section>
    );
};

export default Home;