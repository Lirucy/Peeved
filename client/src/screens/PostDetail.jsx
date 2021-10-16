import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPostById, newComment } from "../services";

const PostDetail = (props) => {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const params = useParams();
  const postId = params.id;
  const history = useHistory();

  useEffect(() => {
    const fetchedPostById = async () => {
      const currentPost = await getPostById(postId);

      if (post) {
        setPost(currentPost);
      }
    };
    fetchedPostById();
  }, [postId]);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const comment = {
        comment,
      };
      await newComment(comment);
      history.push("/user-profile");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <article>
      <h3>{post?.title}</h3>
      <h4>{post?.content}</h4>
      {post?.comments?.map((comment) => (
        <p>{comment.comment}</p>
      ))}
      {props.user ? (
        <>
          <input
            id="post-comment"
            type="text"
            required
            autoFocus
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="comment here"
          />
          <button type="submit" onClick={handleOnSubmit}>
            Comment
          </button>
        </>
      ) : (
        <></>
      )}
    </article>
  );
};

export default PostDetail;
