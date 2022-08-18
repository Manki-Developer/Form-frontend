import React from "react";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PushPinIcon from '@mui/icons-material/PushPin';
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost } from "../../actions/post";
import "./Thread.css";

const Thread = ({
  deletePost,
  auth,
  post: { _id, title, description, createdAt, comments, creatorName, creatorUsername, creator },
}) => {
  return (
    <div className="Thread-main">
      {/* profile-info start */}
      <div>
        <Link to="/profile/0" className="profile-info">
          <img
            className="profile-info-picture"
            src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
            alt="test"
          />

          <div className="recent-post-wrapper">
            <h4>{creatorName}</h4>
            <div className="recent-user-post-profile-name">
              <PersonIcon></PersonIcon>
              <p>
                {creatorUsername} - {createdAt}
              </p>
            </div>
          </div>
        </Link>
      </div>
      {/* profile-info end */}

      {/* title-thread start */}
      <div className="Title-thread">
        <Link to={`/reply/${_id}`} className="Announcement-button">
          {title}
          <hr />
          <p className="threadDesc">{description}</p>
        </Link>
      </div>
      {/* title-thread end */}
      <div className="number-posts">
        <ChatBubbleIcon></ChatBubbleIcon>
        {comments.length > 0 ? <p>{comments.length}</p> : <p>0</p>}
      </div>
    </div>
  );
};

Thread.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps , { deletePost})(Thread);
