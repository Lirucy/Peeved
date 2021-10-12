const Post = (props) => {
    const {title, content} = props.post;
    return (
        <article>
            <h3>{title}</h3>
            <h4>{content}</h4>
        </article>
const Post = () => {
    return (
        <div>
            <h3>Posts go here!</h3>
        </div>
    );
};

export default Post;