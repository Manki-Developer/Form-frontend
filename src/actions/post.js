import { Link } from "react-router-dom";
import api from "../util/api";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_POST_USERNAME,
  GET_USER_BY_USERNAME,
  GET_COMMENT_POST,
} from "./type";
import { useNavigate } from "react-router-dom";


// @desc: Get all posts
// @route: api/posts
export const getPosts = () => async (dispatch) => {

  try {
    const res = await api.get('/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Add like
export const toggleLike = (id) => async (dispatch) => {
  try {
    const res = await api.post(`/posts/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const toggleDislike = (id) => async (dispatch) => {
  try {
    const res = await api.post(`/posts/dislike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Delete post
export const deletePost = (id, navigate) => async (dispatch) => {
  try {
    await api.delete(`/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert('Post Removed', 'success'));
    navigate("/dashboard");
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addPost = (title, description) => async (dispatch) => {
  const body = {title, description}
  try {
    const res = await api.post("/posts", body);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post
export const getPost = (id) => async (dispatch) => {

  try {
    const res = await api.get(`/posts/single/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post by username
export const getPostByUsername = (id) => async (dispatch) => {

  try {
    const res = await api.get(`/posts/username/${id}`);

    dispatch({
      type: GET_POST_USERNAME,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Get post by username
export const getUserByUsername = (id) => async (dispatch) => {

  try {
    const res = await api.get(`/users/username/${id}`);
    console.log(res);
    dispatch({
      type: GET_USER_BY_USERNAME,
      payload: res.data
    });

    // console.log('Here');
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment
export const addComment = (postId, text) => async (dispatch) => {
  const body = {text};
  try {
    const res = await api.post(`/comments/${postId}`, body);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await api.delete(`/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));

  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getCommentByPost = (postId) => async (dispatch) => {
  try{
    const res = await api.get(`/comments/${postId}`);
    dispatch({
      type: GET_COMMENT_POST,
      payload: res.data,
    });
  }catch(err){
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}
