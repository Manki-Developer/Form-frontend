import {
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POSTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_POST_USERNAME,
  GET_USER_BY_USERNAME,
  GET_COMMENT_POST,
} from "../actions/type";

const initialState = {
    posts: [],
    post: [],
    likes: [],
    dislikes: [],
    postUsername: [],
    comments: [],
    loading: true,
    user_post: [],
    error: {},
};

function postReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
        return {
            ...state,
            posts: payload,
            loading: false
        };
        case GET_POST:
        return {
            ...state,
            post: payload,
            likes: payload.like,
            dislikes: payload.dislike,
            loading: false
        };
        case GET_COMMENT_POST:
        return{
            ...state,
            comments: payload,
            loading: false,
        }
        case GET_POST_USERNAME:
        return {
            ...state,
            postUsername: payload,
            loading: false
        };
        case GET_USER_BY_USERNAME:
        return {
          ...state,
          user_post: payload,
          loading: false,
        };
        case ADD_POST:
        return {
            ...state,
            posts: [payload, ...state.posts],
            loading: false
        };
        case DELETE_POST:
        return {
            ...state,
            posts: state.posts.filter((post) => post._id !== payload),
            loading: false
        };
        case POST_ERROR:
        return {
            ...state,
            error: payload,
            loading: false
        };
        case UPDATE_LIKES:
        return {
          ...state,
          likes:payload.like,
          dislikes: payload.dislike,
          loading: false,
        };
        case ADD_COMMENT:
        return {
          ...state,
          comments:[...state.comments, payload.comments],
          loading: false,
        };
        case REMOVE_COMMENT:
        return {
            ...state,
            post: {
            ...state.post,
            comments: state.post.comments.filter(
                (comment) => comment._id !== payload
            )
            },
            loading: false
        };
        default:
        return state;
    }
}
  
export default postReducer;