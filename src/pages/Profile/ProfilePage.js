import React, {useEffect } from 'react';
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./ProfilePage.css";
import {getPostByUsername, getUserByUsername} from '../../actions/post';
import Thread from '../../components/Thread/Thread';

const Profile = ({
  getPostByUsername,
  getUserByUsername,
  post: { postUsername, user_post },
}) => {
  const { userId } = useParams();
  useEffect(() => {
    getPostByUsername(userId);
    getUserByUsername(userId);
  }, [userId, getPostByUsername, getUserByUsername]);

  console.log(user_post);
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
          src={`http://localhost:5000/${user_post.image}`}
          alt=""
        />
        <h1 className="large">{user_post.name}</h1>
        <div className="profile-usertag">
          <PersonIcon></PersonIcon>
          <p>{user_post.username}</p>
        </div>
        <p className="lead">
          Member since {new Date(user_post.createdAt).getFullYear()}
        </p>
        <div className="profile-number-post">
          <ChatBubbleIcon></ChatBubbleIcon>
          <p>{postUsername.length} post</p>
        </div>
      </div>
      <div className="post-container">
        {postUsername.map((post) => (
          <Thread key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

Profile.propTypes = {
  getPostByUsername: PropTypes.func.isRequired,
  getUserByUsername: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPostByUsername, getUserByUsername })(Profile);