import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPostById } from '../services';

const EditPost = (props) => {
    const [selectedPost, setSelectedPost] = useState({});
    const params = useParams();
    const postId = params.id;
    const history = useHistory();

    useEffect(() => {
        const getPost = async() => {
         const fetchedPostsById = await getPostById(postId)
         setSelectedPost(fetchedPostsById)
        }
        getPost()
        
    },[postId])
    

console.log(selectedPost)
    return (
        <div>
            <h3>Edit posts here!</h3>
            <button onClick={()=>history.push('/user-profile')}>Back</button>
        </div>
    );
};

export default EditPost;