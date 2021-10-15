
const Post = (props) => {
    const {title, content} = props.post;
    return (
        <div id="posts-container">
        <article id="post-box">
            <h3 id= "post-title">{title}</h3>
            <h4 id="post-content">{content}</h4>
        </article>
        </div>
    );
};


export default Post;