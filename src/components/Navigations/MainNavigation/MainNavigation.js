import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";

function MainNavigation(props) {
  //This is the Navigation on the left, to add create an object:
  //[{path: "path to link", title: "the name of navigation"}]
  const Navigation_link_left = [{ path: "/example", title: "example1" }];

  //This is the Navigation on the left, to add create an object:
  //[{path: "path to link", title: "the name of navigation"}]
  const Navigation_link_right = [{ path: "/user/login", title: "Login" }];

  //For this component, you don't need to update any of the code below
  //add the navigation by adding the object into the 2 array above^ (left or right)
  return (
    <header className="main-header">
      <nav className="main-navigation__header-nav">
        <ul className="nav-links">
          <h1 href="/" className="main-navigation__title">
            Forum
          </h1>
          {Navigation_link_left.map(({path, title}, index) => {
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
      <nav className="main-navigation__header-nav">
        <ul className="nav-links">
          {Navigation_link_right.map(({path, title}, index) => {
            return (
              <li key={index} className="testing">
                <NavLink to={path} exact="true">
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>{" "}
    </header>
  );
}

export default MainNavigation;
