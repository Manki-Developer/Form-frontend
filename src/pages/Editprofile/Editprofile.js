import React, {useState, useEffect} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from '../../hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../../util/validators";
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
            isValid: false,
          },
          username: {
            value: user.username,
            isValid: false,
          },
          email: {
            value: user.email,
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
        true
      );
      setTest(true);
    }
  }, [user, setFormData]);
  console.log(formState);
  const warningButtonHandler = (e) => {
    e.preventDefault();
    setRemoveWarning(true);
  };
  
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
            <form className="Edit-profile-form">
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
