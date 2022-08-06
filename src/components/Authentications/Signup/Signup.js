import React from "react";
import Card from "../../UIElements/Card/Card";
import Input from "../../FormElements/Input/Input";
import Button from "../../FormElements/Button/Button";
import PropTypes from 'prop-types';
import { useForm } from "../../../hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_MATCH
} from "../../../util/validators";
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";


import "./Signup.css";

const Signup = ({setAlert, register, isAuthenticated, handleChange}) => {
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      repassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const submitHandler = (e) => {
    e.preventDefault();
    if (formState.inputs.password.value !== formState.inputs.repassword.value) {
      setAlert('Passwords do not match', 'danger');
    } else {
      const payload = {
        username: formState.inputs.username.value,
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value
      }
      register(payload);
    }
    // console.log(formState);
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
 
  return (
    <Card className="SignupCard" keyVal="SignupC">
      <h2>Signup</h2>
      <hr />
      <form onSubmit={submitHandler}>
        <Input
          id="username"
          type="text"
          element="input"
          label="Username"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your username."
          onInput={inputHandler}
        />
        <Input
          id="name"
          type="text"
          element="input"
          label="Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your name."
          onInput={inputHandler}
        />
        <Input
          id="email"
          type="text"
          element="input"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a password (min 6 characters)."
          onInput={inputHandler}
        />
        <Input
          id="repassword"
          type="password"
          element="input"
          label="Retype Password"
          validators={[VALIDATOR_MATCH(formState.inputs.password.value)]}
          errorText="Password does not match."
          pattern={formState.inputs.password.value}
          onInput={inputHandler}
        />
        <Button type="submit" size={25} disabled={!formState.isValid}>
          LOG IN
        </Button>
      </form>
      <button
        className="switchButton"
        onClick={event => handleChange(event, 0)}
      >
        Already have an account? Log in
      </button>
    </Card>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
