import React, { useContext } from 'react';
import homestyle from "../home.module.css";
import { Theme } from "../../../context/Themecontext";

const NoticeBoard = (props) => {
    const theme = useContext(Theme);
    const date = "2nd oct 2020 2:02pm"
    return(
        <>
        <h3>Notice Board</h3>
        <div className={homestyle.noticeboard_notices}>
            <div className={homestyle.noticeboard_notice} style={theme[9]}>
                <h4>College Remains Closed Until further notice.</h4>
                <span>{date}</span>
            </div>
            <div className={homestyle.noticeboard_notice} style={theme[9]}>
                <h4>College Remains Closed Until further notice.</h4>
                <span>{date}</span>
            </div>
            <div className={homestyle.noticeboard_notice} style={theme[9]}>
                <h4>College Remains Closed Until further notice.</h4>
                <span>{date}</span>
            </div>
        </div>
        </>
    )
}

export default NoticeBoard;