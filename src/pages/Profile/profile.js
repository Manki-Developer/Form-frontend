import React from 'react';
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Post from '../../components/Post/Post';
import "./profile.css";

const profile = () => {
  return (
    <div className="profile">
        <div className="profile-top bg-primary p-2">
            <img
            className="round-img my-1"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
            />
            <h1 className="large">John Doe</h1>
            <div className="profile-usertag">
                <PersonIcon></PersonIcon>
                <p>User Tag</p>
            </div>
            <p className="lead">Member since {2019}</p>
            <div className="profile-number-post">
                <ChatBubbleIcon></ChatBubbleIcon>
                <p>2 posts</p>
            </div>
        </div>
        <div className='post-container'>
            <Post/>
        </div>
        
    </div>
  );
}

export default profile;