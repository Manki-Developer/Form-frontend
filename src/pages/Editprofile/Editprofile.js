import React, {useState} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import ClearIcon from "@mui/icons-material/Clear";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../../util/validators";
import "./Editprofile.css";

const Editprofile = () => {

    const [removeWarning, setRemoveWarning] = useState(false);

    const warningButtonHandler = (e) => {
      e.preventDefault();
      setRemoveWarning(true);
    }
    const inputHandler = () => {

    }

    return (
      <div className="Editprofile">
        <div className="Editprofile-container">
          <div className="Editprofile-picture">
            <button className="Editprofile-button">
              <img
                className="round-img my-1"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt=""
              />
              <EditIcon
                sx={{ color: "black", fontSize: 40 }}
                className="editIcon"
              ></EditIcon>
            </button>
          </div>
          <div>
            <form className="Edit-profile-form">
              {removeWarning ? <div></div> : <div className="warning-box">
                <p>* is required to fill in order to change your data.</p>
                <button
                  className="clearIcon-button"
                  onClick={warningButtonHandler}
                >
                  <ClearIcon sx={{ color: "black", fontSize: 20 }}></ClearIcon>
                </button>
              </div>}
              
              <div className="form-row-1">
                <Input
                  id="name"
                  type="text"
                  element="input"
                  label="Name"
                  isEdit={true}
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                />
                <Input
                  id="username"
                  type="text"
                  element="input"
                  label="Username"
                  isEdit={true}
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                />
              </div>
              <div className="form-row-2">
                <Input
                  id="email"
                  type="text"
                  element="input"
                  isEdit={true}
                  label="Email"
                  validators={[VALIDATOR_EMAIL()]}
                  onInput={inputHandler}
                />
              </div>
              <div className="form-row-3">
                <Input
                  id="newPassword"
                  type="text"
                  isEdit={true}
                  element="input"
                  label="New Password"
                  onInput={inputHandler}
                />
                <Input
                  id="renewPassword"
                  type="text"
                  isEdit={true}
                  element="input"
                  label="Retype New Password"
                  onInput={inputHandler}
                />
              </div>
              <div className="form-row-4">
                <Input
                  id="currPassword"
                  isEdit={true}
                  type="text"
                  element="input"
                  label="Current Password*"
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                />
              </div>
              <Button register>UPDATE</Button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Editprofile;
