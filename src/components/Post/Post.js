import react from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Post.css";

const Post = ({
  auth,
  comment: {text, creatorName, createdAt, creatorUsername, creatorImage},
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div className="post-profile">
        <Link
          to={`/profile/${creatorUsername}`}
          className="profile-information-comment"
        >
          <div className="image-container">
            <img
              className="round-img2"
              src={`http://localhost:5000/${creatorImage}`}
              alt=""
            />
          </div>
          <h3>{creatorName}</h3>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {createdAt}</p>
        {/* <button type="button" className="btn btn-light">
          <div className="likes-button">
            <ThumbUpIcon></ThumbUpIcon>
            <span>4</span>
          </div>
        </button>
        <button type="button" className="btn btn-light">
          <ThumbDownIcon></ThumbDownIcon>
        </button>
        <a href="post.html" className="btn btn-primary">
          Discussion <span className="comment-count">3</span>
        </a>
        <button type="button" className="btn btn-danger">
          <ClearIcon></ClearIcon>
        </button> */}
      </div>
    </div>
  );
};

Post.propTypes = {
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Post);