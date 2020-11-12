import React, { useContext } from 'react';
import Header from "../home/Header"
import Sidebar from "../home/Sidebar"
import homestyle from "../home/home.module.css";
import { Theme } from "../../context/Themecontext";
import ApplicationBody from "./ApplicationBody";
import appstyle from "./application.module.css"

const Application = (props) => {
  const theme = useContext(Theme);

    return (
        <div className={homestyle.homepage} style={theme[0]}>
            <div className={homestyle.sidebar} style={theme[7]}>
                <Sidebar/>
            </div>

            <div className={homestyle.homepage_main}>
                <div className={homestyle.homepage_header} style={theme[6]}>
                    <Header logout={props.logout} />
                </div>
                <div className={appstyle.applicationbody}>
                    <ApplicationBody />
                </div>
            </div>
        </div>
    )
}

export default Application;