import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

function AddPost() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const platform = useSelector(
    (state) => state.platform.selectedPlatform
  );

  const handleAdd = () => {
    if (text.trim() === "") return;

    dispatch(
      addPost({
        id: Date.now(),
        text,
        platform,
      })
    );

    setText("");
  };

  return (
    <>
      <h2>Create New Post</h2>

      <textarea
        rows="4"
        style={{ width: "100%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening today?"
      />

      <br /><br />

      <button onClick={handleAdd}>
        Post in {platform}
      </button>
    </>
  );
}

export default AddPost;