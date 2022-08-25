import React, {useState, useEffect} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from '../../hooks/form-hook';
import { setAlert } from '../../actions/alert';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EITHER,
  VALIDATOR_MATCH,
  VALIDATOR_REMATCH,
} from "../../util/validators";
import "./Editprofile.css";

const Editprofile = ({ auth: { user }}) => {
  const [removeWarning, setRemoveWarning] = useState(false);
  const [test, setTest] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      currPassword: {
        value: "",
        isValid: false,
      },
      newPassword: {
        value: "",
        isValid: false,
      },
      renewPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if(user){
      setFormData(
        {
          name: {
            value: user.name,
            isValid: true,
          },
          username: {
            value: user.username,
            isValid: true,
          },
          email: {
            value: user.email,
            isValid: true,
          },
          currPassword: {
            value: "",
            isValid: false,
          },
          newPassword: {
            value: "",
            isValid: true,
          },
          renewPassword: {
            value: "",
            isValid: true,
          },
        },
        false
      );
      setTest(true);
    }
  }, [user, setFormData]);

  const warningButtonHandler = (e) => {
    e.preventDefault();
    setRemoveWarning(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
    if (formState.inputs.newPassword.value !== formState.inputs.renewPassword.value) {
      setAlert("Passwords do not match", "danger");
    }
  }

  return (
    <div className="Editprofile">
      {test && (
        <div className="Editprofile-container">
          <div className="Editprofile-picture">
            <button className="Editprofile-button">
              <img
                className="profile-picture round-img my-1"
                src={`http://localhost:5000/${user.image}`}
                alt=""
              />
              <EditIcon
                sx={{ color: "black", fontSize: 40 }}
                className="editIcon"
              ></EditIcon>
            </button>
          </div>
          <div>
            <form className="Edit-profile-form" onSubmit={onSubmitHandler}>
              {removeWarning ? (
                <div></div>
              ) : (
                <div className="warning-box">
                  <p>* is required to fill in order to change your data.</p>
                  <button
                    className="clearIcon-button"
                    onClick={warningButtonHandler}
                  >
                    <ClearIcon
                      sx={{ color: "black", fontSize: 20 }}
                    ></ClearIcon>
                  </button>
                </div>
              )}

              <div className="form-row-1">
                <Input
                  id="name"
                  type="text"
                  element="input"
                  label="Name"
                  isEdit={true}
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                  initialValue={formState.inputs.name.value}
                  initialValid={formState.inputs.name.isValid}
                />
                <Input
                  id="username"
                  type="text"
                  element="input"
                  label="Username"
                  isEdit={true}
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                  initialValue={formState.inputs.username.value}
                  initialValid={formState.inputs.username.isValid}
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
                  initialValue={formState.inputs.email.value}
                  initialValid={formState.inputs.email.isValid}
                />
              </div>
              <div className="form-row-3">
                <Input
                  id="newPassword"
                  type="text"
                  element="input"
                  label="New Password"
                  validators={[
                    VALIDATOR_EITHER(0, 6),
                    // VALIDATOR_MATCH(formState.inputs.renewPassword.value),
                  ]}
                  errorText="New Password need a minimum 6 characters."
                  onInput={inputHandler}
                  initialValue={formState.inputs.newPassword.value}
                  initialValid={formState.inputs.newPassword.isValid}
                />
                <Input
                  id="renewPassword"
                  type="text"
                  element="input"
                  label="Retype New Password"
                  validators={[
                    VALIDATOR_MATCH(formState.inputs.newPassword.value),
                  ]}
                  onInput={inputHandler}
                  pattern={formState.inputs.newPassword.value}
                  errorText="Password does not match."
                  initialValue={formState.inputs.renewPassword.value}
                  initialValid={formState.inputs.renewPassword.isValid}
                />
              </div>
              <div className="form-row-4">
                <Input
                  id="currPassword"
                  isEdit={true}
                  type="password"
                  element="input"
                  label="Current Password*"
                  validators={[VALIDATOR_MINLENGTH(6)]}
                  onInput={inputHandler}
                  initialValue={formState.inputs.currPassword.value}
                  initialValid={formState.inputs.currPassword.isValid}
                />
              </div>
              <Button register disabled={!formState.isValid}>
                UPDATE
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

Editprofile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Editprofile);
