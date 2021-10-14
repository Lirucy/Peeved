import { Link } from "react-router-dom";
const ProfilePost = (props) => {
    const {title, content} = props.post;

    return (
        <article>
            <h3>{title}</h3>
            <h4>{content}</h4>
            <Link to={`/edit-post/${props.post._id}`}>
                <button type='submit'>Edit Peeve</button>
            </Link>



        </article>
    );
};

export default ProfilePost;
