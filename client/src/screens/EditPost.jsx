import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPostById } from '../services';
import { updatePost } from "../services";
import { getAllPosts } from '../services';

const EditPost = () => {
    const [selectedPost, setSelectedPost] = useState({})
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const params = useParams()
    const postId = params.id
    const history = useHistory()


    useEffect(() => {
        getPostById(postId).then((fetchedPost) => setSelectedPost(fetchedPost));
        
        // const getPost = async() => {
        //  const fetchedPostsById = await getPostById(postId)
        //  console.log(fetchedPostsById);
        //  setSelectedPost(fetchedPostsById)
        // }
        // getPost()

        // if (postId) {
        //     setTitle(title)
        //     setContent(content)
        //     updatePost(title, content)
        // }
    // },[]);
    },[postId]);
    console.log(selectedPost);

    useEffect(() => {
        const fetchPosts = async() => {
            const fetchedPosts = await getAllPosts()
            const filtered = fetchedPosts.filter(post => post._id === postId)
            const post = filtered[0]
            setSelectedPost(post)
            setTitle(post.title)
            setContent(post.content)
        }
        fetchPosts()
    }, [])
    

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault()

        setSelectedPost({
            ...selectedPost,
            title,
            content
        })
        history.push("/user-profile");
        } catch (error) {
            console.error(error.message)
        }
    };

    return (
        <div>
            <h3>Edit posts here!</h3>
            {/* <p>{selectedPost.title}</p> */}
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="content">Content: </label>
                <textarea id="content" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                <button type="submit">submit</button>
                <button onClick={() => history.push('/user-profile')}>Cancel</button>
            </form>
        </div>
    );
};

export default EditPost;




