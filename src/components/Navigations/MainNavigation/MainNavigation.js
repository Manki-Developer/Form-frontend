import React, { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import {
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  DropdownToggle,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import { logout } from "../../../actions/auth";

import "./MainNavigation.css";

function MainNavigation({ auth: { isAuthenticated, username}, logout }) {
  //This is the Navigation on the left, to add create an object:
  //[{path: "path to link", title: "the name of navigation"}]
  const Navigation_link_left = [{ path: "/dashboard", title: "Home" }];

  //This is the Navigation on the left, to add create an object:
  //[{path: "path to link", title: "the name of navigation"}]
  const Navigation_link_right = [{ path: "/user/login", title: "Login" }];

  // console.log(user);

  const [dropdownOpen, setOpen] = useState(false);
  
  //For this component, you don't need to update any of the code below
  //add the navigation by adding the object into the 2 array above^ (left or right)
  return (
    <div>
      <header className="main-header">
        <nav className="main-navigation__header-nav">
          <ul className="nav-links">
            <h1 href="/" className="main-navigation__title">
              Forum
            </h1>
            {Navigation_link_left.map(({ path, title }, index) => {
              return (
                <li key={index} className="testing">
                  <NavLink to={path} exact="true">
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        {isAuthenticated ? (
          <ButtonDropdown
            toggle={() => {
              setOpen(!dropdownOpen);
            }}
            isOpen={dropdownOpen}
          >
            <DropdownToggle tag="a" className="nav-link">
              <DehazeIcon sx={{ color: "black" }}></DehazeIcon>
            </DropdownToggle>
            <DropdownMenu end>
              {/* <DropdownItem header>Numeric Characters</DropdownItem> */}
              <Link to={`/profile/${username}`}>
                <DropdownItem>My Profile</DropdownItem>
              </Link>
              <Link to={`/edit-profile/${username}`}>
                <DropdownItem>Edit Profile</DropdownItem>
              </Link>
              <DropdownItem divider />
              <DropdownItem>
                <a onClick={logout} href="#!">
                  Logout
                </a>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        ) : (
          <nav className="main-navigation__header-nav">
            <ul className="nav-links">
              {Navigation_link_right.map(({ path, title }, index) => {
                return (
                  <li key={index} className="testing">
                    <NavLink to={path} exact="true">
                      {title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

MainNavigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logout})(MainNavigation);
