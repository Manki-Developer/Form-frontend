import React from "react";
import Card from "../../UIElements/Card/Card";
import Input from "../../FormElements/Input/Input";
import Button from "../../FormElements/Button/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../../util/validators";

import "./Login.css";

const login = (props) => {
  return (
    <Card className="loginCard">
      <h2>Login</h2>
      <hr />
      <form>
        <Input
          id="email"
          type="text"
          element="input"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          //   onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password."
          //   onInput={inputHandler}
        />
        <Button type="submit" size={25}>
          LOG IN
        </Button>
      </form>
      <button className="switchButton" onClick={() => props.handleChange("event", 1)}>
        Don't have an account yet? Create one
      </button>
    </Card>
  );
};

export default login;
