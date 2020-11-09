import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Button } from "@material-ui/core";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 
import {Toggle, Status, Theme} from "../../context/Themecontext";
import loginstyle from "./login.module.css";

toast.configure();
export default function LoginForm(props) {

  const toggletheme = useContext(Toggle);
  const status = useContext(Status);
  const theme = useContext(Theme)
  
    const [userName, setuserName] = useState("");
    const [passWord, setpassWord] = useState("");

  const authenticate = (e) => {
    e.preventDefault();
    let defaultuser = "admin",
      defaultpass = "admin";
    if (userName !== "" && passWord !== "") {
      if (userName === defaultuser && passWord === defaultpass) {
        props.login();
      } else {
        toast.error("Wrong username/password.. Please try again!!!",{ position: toast.POSITION.TOP_CENTER});
        setuserName("");
        setpassWord(""); 
      }
    } else {
      toast.error("Username and password cannot be empty",{ position: toast.POSITION.TOP_CENTER});
    }
  }

  useEffect(() => {
    if (localStorage.getItem("loginStatus")) {
      props.login();
    }
  }, [props.login]);

    return (
        <>
            <div className={loginstyle.themeswitcher}>
                <WbSunnyIcon className={loginstyle.dayicon}/>
                <Switch onClick={toggletheme} color="dark" checked={!status && 'true'}/>
                <NightsStayIcon className={loginstyle.nighticon}/>
            </div>

            <form className={loginstyle.login_form_form} onSubmit={e=>authenticate(e)}>
                <h2>Login</h2>
                <input type="text" onChange={e=>setuserName(e.target.value)} value={userName} placeholder="Username"
                style={theme[2]}
                 required/>
                <br/>
                <input type="password" onChange={e=>setpassWord(e.target.value)} value={passWord} placeholder="Password" style={theme[2]} required/>
                <br/>
                <Button type="submit" className={loginstyle.login_form_btn} style={theme[3]}>
                    <DoubleArrowIcon className={loginstyle.login_btn} style={theme[4]} />
                </Button>
            </form>

            <div className={loginstyle.backtowebsite} >
              <Link to="/" style={theme[5]}>  Back To website </Link>
            </div>
        </>
    )
}
