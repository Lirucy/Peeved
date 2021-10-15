import { useState } from "react";
import { useHistory } from "react-router-dom";
import { newPost } from "../services";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const post = {
                title, 
                content 
            }
            await newPost(post);
            history.push("/");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <section id="new-section">
            <h3 id="add-peeve-text">Add a Peeve!</h3>
            <form onSubmit={handleSubmit} className="new-form">
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" placeholder="Enter peeve title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="content">Description: </label>
                <textarea id="content" type="text" placeholder="Tell us what peeves you off..." value={content} onChange={(e) => setContent(e.target.value)}/>
                <button type="submit">submit</button>
            </form>
        </section>
    );
};

export default NewPost;