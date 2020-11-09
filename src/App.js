import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Themecontext  from "./context/Themecontext";
import "./index.css";

export default function App() {
  const [loginStatus, setloginStatus] = useState(false);

    // login token validity check
  const isTokenExpire = () => {
    const timeNow = new Date();
    timeNow.setHours(0, 0, 0, 0);
    const tokenValidityCheck = localStorage.getItem("token");
    console.log(tokenValidityCheck)
    if (Date.parse(timeNow) < Date.parse(tokenValidityCheck)) {
      return true;
    } else {
      return false;
    }
  }

  const login = () => {
    setloginStatus(true);
    const timeNowII = new Date();
    timeNowII.setHours(timeNowII.getHours() + 24);
    localStorage.setItem("loginStatus", true);
    localStorage.setItem("token", timeNowII);
  };

  const logout = () => {
    setloginStatus(false);
    localStorage.removeItem("loginStatus");
  };

  return (
   <Themecontext>
      <Router>
        <Switch>
         <Route exact path="/"
          render={() => loginStatus && isTokenExpire() ? <Redirect to="/home" /> : <Login login={login} />
          } />
        
        <Route exact path="/home"
          render={() => loginStatus && isTokenExpire() ? <Home logout={logout} /> : <Redirect to="/" />} />
        </Switch>
      </Router>
   </Themecontext> 
  )
}
