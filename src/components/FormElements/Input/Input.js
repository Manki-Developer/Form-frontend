import React, {useEffect, useReducer} from "react";

import { validate } from "../../../util/validators";
import "./Input.css";

function Input(props) {

  return (
    <div className={"form-control"}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="input-control">
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          // onChange={changeHandler}
          // onBlur={touchHandler}
          // value={inputState.value}
        />
      </div>
    </div>
  );
}

export default Input;
