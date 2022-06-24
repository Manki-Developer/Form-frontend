import React from "react";
import Card from "../../UIElements/Card/Card";
import Input from "../../FormElements/Input/Input";
import Button from "../../FormElements/Button/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../util/validators";

import "./Signup.css";

const Signup = (props) => {
  return (
    <Card className="SignupCard">
      <h2>Signup</h2>
      <hr />
      <form>
        <Input
          id="FirstName"
          type="text"
          element="input"
          label="First Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your first name."
          // onInput={inputHandler}
        />
        <Input
          id="LastName"
          type="text"
          element="input"
          label="Last Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your last Name."
          // onInput={inputHandler}
        />
        <Input
          id="email"
          type="text"
          element="input"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          // onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a password (min 6 characters)."
          // onInput={inputHandler}
        />
        <Input
          id="re-password"
          type="password"
          element="input"
          label="Retype Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a password (min 6 characters)."
          // onInput={inputHandler}
        />
        <Button type="submit" size={25}>
          LOG IN
        </Button>
      </form>
      <button
        className="switchButton"
        onClick={() => props.handleChange("event", 0)}
      >
        Already have an account? Log in now.
      </button>
    </Card>
  );
};

export default Signup;
