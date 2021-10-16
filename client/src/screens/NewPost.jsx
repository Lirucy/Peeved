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
        content,
      };
      await newPost(post);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section id="new-section">
      <form onSubmit={handleSubmit} className="new-form box-shadow">
        <h3 id="add-peeve-text">Add a Peeve!</h3>
        <label htmlFor="title"> </label>
        <input
          id="new-title"
          className="box-shadow"
          type="text"
          required
          autoFocus
          placeholder="Enter peeve title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content"> </label>
        <textarea
          id="new-content"
          className="box-shadow"
          type="text"
          required
          placeholder="Tell us what peeves you off..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button id="peeve-submit-btn" className="box-shadow" type="submit">
          submit
        </button>
      </form>
    </section>
  );
};

export default NewPost;
