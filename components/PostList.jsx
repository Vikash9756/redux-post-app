import { useSelector, useDispatch } from "react-redux";
import {
  deletePost,
  editPost,
} from "../features/posts/postsSlice";

import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function PostList() {

  const posts = useSelector(
    (state) => state.posts.posts
  );

  const dispatch = useDispatch();

  const handleEdit = (post) => {
    const newText = prompt("Edit Post", post.text);

    if (newText) {
      dispatch(
        editPost({
          id: post.id,
          text: newText,
        })
      );
    }
  };

  return (
    <>
      <h2>Posts</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h4>{post.platform || "Unknown Platform"}</h4>

          <p>{post.text}</p>

          <button onClick={() => handleEdit(post)}>
            <FaEdit /> Edit
          </button>

          {" "}

          <button onClick={() => dispatch(deletePost(post.id))}>
            <FaTrash /> Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default PostList;