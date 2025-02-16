import { createSlice } from "@reduxjs/toolkit";
import { getBlogsFromLocal, setBlogsToLocal } from "../app/local";





export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: getBlogsFromLocal()
  },
  reducers: {

    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      setBlogsToLocal(state.blogs);
    },
    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
      setBlogsToLocal(state.blogs);
    },
    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => blog.id === action.payload.id ? action.payload : blog);
      setBlogsToLocal(state.blogs);
    }


  }



});

export const { addBlog, removeBlog, updateBlog } = blogSlice.actions;


