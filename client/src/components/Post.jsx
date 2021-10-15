import { useState } from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
    const { title, content } = props.post;

    return (
        <article>
            <h3>{title}</h3>
            <h4>{content}</h4>
        <Link to={`/post/${props.post._id}`}>Comment</Link>
        </article>
    );
};

export default Post;