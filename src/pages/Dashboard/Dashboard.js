import React, {useEffect, useState} from 'react';
import Button from "../../components/FormElements/Button/Button";
import Input from "../../components/FormElements/Input/Input";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { VALIDATOR_REQUIRE } from "../../util/validators";
import { getPosts, addPost } from '../../actions/post';
import Thread from '../../components/Thread/Thread';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { useForm } from '../../hooks/form-hook';


import './Dashboard.css';

const Dashboard = ({ getPosts, addPost, post: { posts }, isAuthenticated }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [openForm, setOpenForm] = useState(false);
  // let isLogin = true;

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();
    addPost(formState.inputs.title.value, formState.inputs.description.value);
  };

  function elements() {
    if (isAuthenticated && openForm) {
      return (
        <div className="add-thread">
          <button
            className="clearIcon-button-2"
            onClick={() => {
              setOpenForm(false);
            }}
          >
            <ClearIcon sx={{ color: "black", fontSize: 20 }}></ClearIcon>
          </button>
          <form onSubmit={submitHandler}>
            <Input
              id="title"
              element="input"
              type="text"
              placeholder="Enter a title"
              rows={6}
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <Input
              id="description"
              element="textarea"
              type="text"
              placeholder="Create a post"
              rows={6}
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <div className="submit-button">
              <Button size="big" register={true} disabled={!formState.isValid}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      );
    } else if (isAuthenticated && !openForm) {
      return (
        <button
          className="button-primary"
          onClick={() => {
            setOpenForm(true);
          }}
        >
          <AddIcon sx={{ fontSize: 20 }}></AddIcon>
          <p>Add New Thread</p>
        </button>
      );
    } else {
      return <></>;
    }
  }

  return (
    <div>
      <div className="thread-container">
        {elements()}
        {posts.map((post) => (
          <Thread key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { getPosts, addPost })(Dashboard);