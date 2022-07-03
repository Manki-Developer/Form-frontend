import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import "./Thread.css";

const Thread = () => {
  return (
    <div className="Thread-main">
      {/* title-thread start */}
      <div className="Title-thread">
        <div>
          <EditIcon></EditIcon>
          <b>Announcement</b>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* title-thread end */}

      {/* thread-info start */}
      <div className="thread-info">
        <div className="thread-count">
          <ModeEditOutlineIcon></ModeEditOutlineIcon>
          <p>2 threads</p>
        </div>

        <div className="post-count">
          <ModeEditOutlineIcon></ModeEditOutlineIcon>
          <p>7 posts</p>
        </div>
      </div>
      {/* thread-info end */}

      {/* profile-info start */}
      <div className="profile-info">
        <img
          className="profile-info-picture"
          src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
          alt="test"
        />

        <div className="recent-post-wrapper">
          <div className="recent-thread-name">
            <PushPinIcon></PushPinIcon>
            <p> Welcome to Rengorum</p>
          </div>

          <div className="recent-user-post-profile-name">
            <PersonIcon></PersonIcon>
            <p>goku - 15 minutes ago</p>
          </div>
        </div>
      </div>
      {/* profile-info end */}
    </div>
  );


};

export default Thread;
