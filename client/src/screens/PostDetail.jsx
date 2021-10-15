import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPostById } from "../services";

const PostDetail = (props) => {
    const [post, setPost] = useState({});
    const [comment, setComment] = useState('');
    const params = useParams();
    const postId = params.id;
    const history = useHistory()



    useEffect(() => {
        const fetchedPostById = async () =>{
        const currentPost = await getPostById(postId);
        if (post) {
            setPost(currentPost);
        }
           
        }
        fetchedPostById()
    },[postId])

  
    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();

        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <article>
            <h3>{post?.title}</h3>
            <h4>{post?.content}</h4>
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

export default PostDetail;