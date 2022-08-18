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
} from '../actions/type';

const initialState = {
    posts: [],
    post: [],
    likes: [],
    dislikes: [],
    postUsername:[],
    comments: [],
    loading: true,
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
            comments: payload.comments,
            likes: payload.like,
            dislikes: payload.dislike,
            loading: false
        };
        case GET_POST_USERNAME:
        return {
            ...state,
            postUsername: payload,
            loading: false
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
          // posts: state.posts.map((post) =>
          // post._id === payload.id ? { ...post, likes: payload.likes } : post
          // ),
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