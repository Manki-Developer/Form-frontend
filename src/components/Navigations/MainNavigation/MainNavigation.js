import React, { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import {
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  DropdownToggle,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./MainNavigation.css";

function MainNavigation(props) {
  //This is the Navigation on the left, to add create an object:
  //[{path: "path to link", title: "the name of navigation"}]
  const Navigation_link_left = [{ path: "/dashboard", title: "Home" }];

  //This is the Navigation on the left, to add create an object:
  //[{path: "path to link", title: "the name of navigation"}]
  const Navigation_link_right = [{ path: "/user/login", title: "Login" }];

  const [dropdownOpen, setOpen] = useState(false);
  const isLogin = true;

  // function toggle(){
  //   setDropDownOpen(!dropdownOpen);
  // }

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
        {isLogin ? (
          <ButtonDropdown
            toggle={() => {
              setOpen(!dropdownOpen);
            }}
            isOpen={dropdownOpen}
          >
            <DropdownToggle tag="a" className="nav-link"><DehazeIcon sx={{color: "black"}}></DehazeIcon></DropdownToggle>
            <DropdownMenu right>
              {/* <DropdownItem header>Numeric Characters</DropdownItem> */}
              <Link to="/profile/0"><DropdownItem>My Profile</DropdownItem></Link>
              <Link to="/edit-profile/0"><DropdownItem>Edit Profile</DropdownItem></Link>
              <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
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

export default MainNavigation;
