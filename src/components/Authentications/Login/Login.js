import React from "react";
import Card from "../../UIElements/Card/Card";
import Input from "../../FormElements/Input/Input";
import Button from "../../FormElements/Button/Button";
import PropTypes from 'prop-types';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../../util/validators";
import { useForm } from "../../../hooks/form-hook";
import { login } from "../../../actions/auth";
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import "./Login.css";

const Login = ({login, isAuthenticated, handleChange}) => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const submitHandler = (e) => {
    e.preventDefault();
    login(formState.email.value, formState.password.value);
    // console.log(formState);
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Card className="loginCard" keyVal="loginC">
      <h2>Login</h2>
      <hr />
      <form onSubmit={submitHandler}>
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
          errorText="Please enter a valid password."
          onInput={inputHandler}
        />
        <Button type="submit" size={25} disabled={!formState.isValid}>
          LOG IN
        </Button>
      </form>
      <button
        className="switchButton"
        onClick={event => handleChange(event, 1)}
      >
        Don't have an account yet? Create one
      </button>
    </Card>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  handleChange: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
