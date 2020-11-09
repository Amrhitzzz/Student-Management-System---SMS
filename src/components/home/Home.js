import React, { useContext } from 'react';
import Header from "./Header";
import Homebody from "./Homebody";
import Sidebar from "./Sidebar"
import homestyle from "./home.module.css";
import { Theme } from "../../context/Themecontext";

const Home = (props) => {
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
                <div className={homestyle.homepage_body}>
                    <Homebody/>
                </div>
            </div>
        </div>
    )
}

export default Home;