import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getCommentById, getPostById, getAllComments, getAllPosts } from "../services";

const Post = (props) => {
    const { title, content } = props.post;
    const [comment, setComment] = useState('');
    const [filteredComments, setFilteredComments] = useState([]);
    const params = useParams;
    const postId = params.id;
    const history = useHistory()



    useEffect(() => {
        const fetchedFilteredComments = async () =>{
            const fetchedComments = await getAllComments();
            const filtered = fetchedComments.filter((comment)=> comment.postId === props.post?.id)
            setFilteredComments(filtered)
           
        }
        fetchedFilteredComments()
    },[props.post])

  
    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();

        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <h4>{content}</h4>
            {props.user ? (
                <>
                    <input type='text' value={comment} placeholder='comment here' />
                    <button >Comment</button>
                </>
            ) : (
                <></>
            )}
        </article>
    );
};

export default Post;