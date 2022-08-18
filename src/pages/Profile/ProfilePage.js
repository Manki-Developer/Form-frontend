import React, {useEffect } from 'react';
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./ProfilePage.css";
import {getPostByUsername } from '../../actions/post';
import Thread from '../../components/Thread/Thread';

const Profile = ({getPostByUsername, post:{postUsername}}) => {

  const {userId} = useParams();
    useEffect(() => {
      getPostByUsername(userId);
    }, [getPostByUsername, userId]);

  console.log(userId);

  console.log(postUsername);

  return (
    <div className="profile">
      <div className="profile-top bg-primary p-2">
        <Link to="/edit-profile/0">
          <EditIcon
            className="editIcon-position"
            sx={{ fontSize: 40 }}
          ></EditIcon>
        </Link>
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
      <div className="post-container">
        {postUsername.map(post => <Thread key={post._id} post={post} />)}
      </div>
    </div>
  );
}

Profile.propTypes = {
  getPostByUsername: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPostByUsername })(Profile);