import { useEffect, useState } from "react";
import { getAllPosts } from "../services";
import Post from "../components/Post";

const Home = ({ user }) => {
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
    }, []);
    return (
        <section className="home">
            <h3>Checkout our Top Pet Peeves!</h3>


            {posts.map((post) => (
                <Post key={post._id} post={post} user={user}
                />
            ))}



        </section>
    );
};

export default Home;