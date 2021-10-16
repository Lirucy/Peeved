import { Link } from "react-router-dom";
const ProfilePost = (props) => {
    const {title, content} = props.post;

    return (
        //try with and without className "box-shadow" to decide
        <article id="user-post-box" className="box-shadow">
        {/* <article id="user-post-box"> */}
            <h3 id="post-title">{title}</h3>
            <h4 id="post-content">{content}</h4>
            <Link to={`/edit-post/${props.post._id}`}> 
                <button type='submit' className="box-shadow">Edit Peeve</button>
            </Link>
    </article>
    );
};

export default ProfilePost;
