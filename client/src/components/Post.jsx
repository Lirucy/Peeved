import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAllComments, newComment } from "../services";

const Post = (props) => {
  const { title, content } = props.post;
  const [comment, setComment] = useState("");
  const [filteredComments, setFilteredComments] = useState([]);
  const params = useParams;
  const postId = params.id;
  const history = useHistory();

  useEffect(() => {
    const fetchedFilteredComments = async () => {
      const fetchedComments = await getAllComments();
      const filtered = fetchedComments.filter(
        (comment) => comment.postId === props.post?.id
      );
      setFilteredComments(filtered);
    };
    fetchedFilteredComments();
  }, [props.post]);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const comment = {
        comment
      };
      await newComment(comment);
      history.push("/user-profile");
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return (
    <article id="post-box" className="box-shadow">
      <h3 id="post-title">{title}</h3>
      <h4 id="post-content">{content}</h4>
      {props.user ? (
        <>
        {/* <form onSubmit={handleOnSubmit}>
        <input
            id="post-comment"
            className="box-shadow"
            type="text"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="comment here"
          />
          <button className="box-shadow hover-btn" type="submit">
            Comment
          </button>
        </form> */}
          <Link to={`/post/${props.post._id}`}>View comments</Link>
        </>
      ) : (
        <>
          <Link to={"/login"}>Login to view comments</Link>
        </>
      )}
    </article>
  );
};

export default Post;
