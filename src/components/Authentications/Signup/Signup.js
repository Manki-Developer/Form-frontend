import React from "react";
import Card from "../../UIElements/Card/Card";
import Input from "../../FormElements/Input/Input";
import Button from "../../FormElements/Button/Button";
import { useForm } from "../../../hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_MATCH
} from "../../../util/validators";

import "./Signup.css";

const Signup = (props) => {
  const [formState, inputHandler] = useForm(
    {
      firstName: {
        value: "",
        isValid: false,
      },
      lastName: {
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
    console.log(formState);
  }
 
  return (
    <Card className="SignupCard" keyVal="SignupC">
      <h2>Signup</h2>
      <hr />
      <form onSubmit={submitHandler}>
        <Input
          id="firstName"
          type="text"
          element="input"
          label="First Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your first name."
          onInput={inputHandler}
        />
        <Input
          id="lastName"
          type="text"
          element="input"
          label="Last Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your last name."
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
        onClick={() => props.handleChange("event", 0)}
      >
        Already have an account? Log in
      </button>
    </Card>
  );
};

export default Signup;
