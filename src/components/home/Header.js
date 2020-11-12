import React, { useContext } from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Toggle, Status } from "../../context/Themecontext"
import homestyle from "./home.module.css"


const Header = (props) => {
    const users = "Amrhit Pradhan";
    const loginstatusmsg ="Last Logged in 4 hours ago";
    const toggletheme = useContext(Toggle);
    const status = useContext(Status);

    
    return (
        <>
        <div className={homestyle.homepage_header_top}>
            <div>
                <h2>Nagarjuna College of IT</h2>
            </div>

            <div className={homestyle.homepage_header_user}>
                <div>
                <NotificationsNoneIcon className={homestyle.header_usericon}/>
                <MailOutlineIcon className={homestyle.header_usericon} />
                </div>
                <h3>{users}</h3>
            </div>
        </div>

           <div className={homestyle.header_status}>
                <h3>System Overview</h3>
                <h4>{loginstatusmsg}</h4>
           </div>
           
            <div className={homestyle.header_icons}>
                <div>
                    <NightsStayIcon className={homestyle.nighticon}/>
                    <Switch onClick={toggletheme} size="small" color="dark" checked={!status && 'true'} className={homestyle.switchicon}/>
                    <WbSunnyIcon className={homestyle.lighticon}/>
                </div>
                
                <div onClick={()=>props.logout()} style={{cursor:"pointer"}}>
                <ExitToAppIcon /> Logout
                </div>
            </div>      
        </>
    )
}

export default Header;