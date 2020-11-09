import React from 'react'
import Greeting from "./Greeting";
import loginstyle from "./login.module.css"

export default function LoginInfo() {
    return (
        <>
            <div className={loginstyle.login_info_title}> NCIT </div>

            <div className={loginstyle.login_info_greeting}>
                <h1>Welcome,</h1>
                <Greeting />
            </div>

            <h4 className={loginstyle.login_info_verticaltitle}>NCIT</h4>

            <div className={loginstyle.login_info_tnc}>
                <p>terms and conditions</p>
            </div>
        </>
    )
}
