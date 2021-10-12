
const Post = (props) => {
    const {title, content} = props.post;
    return (
        <article>
            <h3>{title}</h3>
            <h4>{content}</h4>
        </article>


export default Post;