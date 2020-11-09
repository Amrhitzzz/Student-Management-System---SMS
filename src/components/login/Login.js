import React, { useContext } from 'react';
import LoginInfo from "./LoginInfo";
import LoginForm from "./LoginForm";
import loginstyle from "./login.module.css";
import { Theme } from "../../context/Themecontext";

const Login = (props) => {
 const theme = useContext(Theme);

    return (
        <div className={loginstyle.login} style={theme[0]}>
            <div className={loginstyle.login_container} style={theme[1]}>
                <div className={loginstyle.login_info}>
                    <LoginInfo logout={props.logout}/> 
                </div>

                <div className={loginstyle.login_form}>
                    <LoginForm login={props.login}/>
                </div>
            </div>
        </div>
    )
}

export default Login;
