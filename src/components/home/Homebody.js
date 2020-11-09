import React, { useContext } from 'react';
import NoticeBoard from "./homebody/NoticeBoard";
import RecentActivites from "./homebody/RecentActivites";
import TotalPresentDays from "./homebody/TotalPresentDays";
import TotalSchoolDays from "./homebody/TotalSchoolDays";
import Calendar from "./homebody/Calendar";
import homestyle from "./home.module.css";
import { Theme } from "./../../context/Themecontext"

const Homebody = () => {
   const theme = useContext(Theme);
    return (
        <>
        <div className={homestyle.homepage_body_firstbox}>
            <div className={homestyle.homepage_body_firstbox_first}>
                <div className={homestyle.totalschooldays} style={theme[8]}>
                    <TotalSchoolDays />
                </div>
                <div className={homestyle.totalpresentdays} style={theme[8]}>
                    <TotalPresentDays />
                </div>
            </div>

            <div className={homestyle.homepage_body_firstbox_second } style={theme[8]}>
             {/* {homestyle.calendar} */}
                <Calendar />
            </div>
        </div>

        <div className={homestyle.homepage_body_secondbox}>
            <div className={homestyle.noticeboard} style={theme[8]}>
                <NoticeBoard />
            </div>
            <div className={homestyle.recentactivities} style={theme[8]}>
                <RecentActivites />
            </div>
        </div>
        </>
    )
}

export default Homebody;