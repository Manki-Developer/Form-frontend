import React from "react";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PushPinIcon from '@mui/icons-material/PushPin';
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import "./Thread.css";

const Thread = (props) => {
  return (
    <div className="Thread-main">
      {/* profile-info start */}
      <div>
        <a href="/" className="profile-info">
          <img
            className="profile-info-picture"
            src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
            alt="test"
          />

          <div className="recent-post-wrapper">
            <h4>Kakarot</h4>
            <div className="recent-user-post-profile-name">
              <PersonIcon></PersonIcon>
              <p>{props.userName} - 15 minutes ago</p>
            </div>
          </div>
        </a>
      </div>
      {/* profile-info end */}

      {/* title-thread start */}
      <div className="Title-thread">
        <Link to={`/reply/${props.id}`} className="Announcement-button">
          {props.announcement}
          <hr />
          <p className="threadDesc">{props.description}</p>
        </Link>
      </div>
      {/* title-thread end */}
      <div className="number-posts">
        <ChatBubbleIcon></ChatBubbleIcon>
        <p>2 posts</p>
      </div>
    </div>
  );


};

export default Thread;
