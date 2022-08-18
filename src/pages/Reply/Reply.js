import React, { useEffect } from "react";
import Post from "../../components/Post/Post";
import Button from "../../components/FormElements/Button/Button";
import Input from "../../components/FormElements/Input/Input";
import PersonIcon from "@mui/icons-material/Person";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Link, useParams } from "react-router-dom";
import { VALIDATOR_MINLENGTH } from "../../util/validators";
import "./Reply.css";
import { useForm } from "../../hooks/form-hook";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getPost,
  addComment,
  toggleLike,
  toggleDislike,
} from "../../actions/post";

const Reply = ({
  getPost,
  post: { post, comments, likes, dislikes },
  addComment,
  toggleLike,
  toggleDislike,
  auth,
}) => {
  // missing title
  // missing real name
  // missing delete button
  // missing comment

  const { threadId } = useParams();
  useEffect(() => {
    getPost(threadId);
  }, [getPost, threadId]);

  // console.log(post);
  // console.log(threadId);

  const [formState, inputHandler] = useForm(
    {
      text: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();
    addComment(post._id, formState.inputs.text.value);
  };
  

  const likeButtonHandler = () => {
    toggleLike(post._id);
  };

  const dislikeButtonHandler = () => {
    toggleDislike(post._id);
  };

  // console.log(likes);
  // console.log(dislikes);
  // console.log(post);
  // console.log(comments);

  return (
    <div>
      {post.Loading ? (
        <div>loading</div>
      ) : (
        <div className="post-section">
          <div className="post-main">
            <div>
              <Link to={`/profile/${0}`} className="profile-information">
                <img
                  className="profile-picture"
                  src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
                  alt="test"
                />
                <div>
                  <h3>{post.creatorName}</h3>
                  <div className="profile-username">
                    <PersonIcon></PersonIcon>
                    <p>{post.creatorUsername}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="post-description">
              <p className="edit-time">{post.createdAt}</p>
              <p className="edit-description">{post.description}</p>
            </div>
            <div className="post-like">
              <button
                type="button"
                className="btn btn-light"
                onClick={likeButtonHandler}
              >
                <div className="likes-button">
                  <ThumbUpIcon></ThumbUpIcon>
                  <span>{likes.length > 0 ? likes.length : 0}</span>
                </div>
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={dislikeButtonHandler}
              >
                <div className="likes-button">
                  <ThumbDownIcon></ThumbDownIcon>
                  <span>{dislikes.length > 0 ? dislikes.length : 0}</span>
                </div>
              </button>
            </div>
          </div>

          {comments.map((comment) => (
            <Post key={comment._id} comment={comment} />
          ))}

          <div className="post-form">
            <div className="post-decor">
              <h3>Say Something...</h3>
            </div>
            <form onSubmit={submitHandler}>
              <Input
                id="text"
                element="textarea"
                type="text"
                placeholder="Create a comment"
                rows={6}
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler}
              />
              <div className="submit-button">
                <Button
                  size="big"
                  register={true}
                  disabled={!formState.isValid}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

Reply.propTypes = {
  getPost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleDislike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  // deletePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getPost,
  addComment,
  toggleLike,
  toggleDislike,
})(Reply);
