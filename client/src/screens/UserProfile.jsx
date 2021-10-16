import { useEffect, useState } from "react";
import { getAllPosts } from "../services";
import ProfilePost from "../components/ProfilePost";

const UserProfile = (props) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchedFilteredPosts = async () => {
      const fetchedPosts = await getAllPosts();
      const filter = fetchedPosts.filter(
        (post) => post.userId === props.user?.id
      );
      setFilteredPosts(filter);
    };
    fetchedFilteredPosts();
  }, [props.user]);

  return (
    <section id="user-profile-body">
      <div className="user-profile-posts">
        <h3>My Pet Peeves!</h3>
        <div>
          {filteredPosts.map((post) => (
            <ProfilePost key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
