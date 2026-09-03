import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      text: "Welcome! Use the buttons below to edit or delete this post.",
      platform: "Twitter",
    },
    {
      id: 2,
      text: "Switch platform, add a new post, then edit or delete it.",
      platform: "Facebook",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        post => post.id !== action.payload
      );
    },

    editPost: (state, action) => {
      const post = state.posts.find(
        p => p.id === action.payload.id
      );

      if (post) {
        post.text = action.payload.text;
      }
    },
  },
});

export const {
  addPost,
  deletePost,
  editPost,
} = postsSlice.actions;

export default postsSlice.reducer;