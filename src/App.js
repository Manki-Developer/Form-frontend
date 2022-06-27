import React from "react";
import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import MainNavigation from "./components/Navigations/MainNavigation/MainNavigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //To add page route, add an object below:
  //{path: "page path", Element: "The imported page object"}
  //note * is used to find if there's no match path found 
  //the * path Element can be changed to dashboard
  const ROUTE_TO_PAGES = [
    { path: "/user/login", Element: <Authentication /> },
    { path: "*", Element: <Authentication /> },
  ];

  //For now, don't changed the code below
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          {ROUTE_TO_PAGES.map(({path, Element}, index) => {
            return (<Route path={path} element={Element} key={index} />);
          })}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
