import React, { useState } from "react"; 
import {Box, Tab, Paper} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import LoginPage from "../../components/Authentications/Login/Login";
import SignupPage from "../../components/Authentications/Signup/Signup";
import "./Authentication.css";

const Authentication = (props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = { width: "24rem", margin: "0px auto" };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
              {children}
          </Box>
        )}
      </div>
    );
  }

  return (
    <div className="AuthPage">
      <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <LoginPage handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignupPage handleChange={handleChange} />
        </TabPanel>
      </Paper>
    </div>
  );
};

export default Authentication;
