import React, { useContext } from 'react';
import { Link }  from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home'
import MarkunreadIcon from '@material-ui/icons/Markunread'
import AssignmentIcon from '@material-ui/icons/Assignment'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import SettingsIcon from '@material-ui/icons/Settings'
import { Theme } from "../../context/Themecontext"

const Sidebar = () => {
  const theme = useContext(Theme);
    return (
        <>
          <Link to="/home" style={theme[10]}>
          <HomeIcon />
          </Link>
          <Link to="/home/app" style={theme[10]}>
          <MarkunreadIcon />
          </Link>
          <Link to="/" style={theme[10]}>
          <AssignmentIcon/>
          </Link>
          <Link to="/" style={theme[10]}>
          <FormatListNumberedIcon />
          </Link>
          <Link to="/" style={theme[10]}>
          <SupervisorAccountIcon />
          </Link>
          <Link to="/" style={theme[10]}>
          <SettingsIcon />
          </Link>
          <Link to="/" style={theme[10]}>
          <AssignmentTurnedInIcon />
          </Link>
        </>
    )
}

export default Sidebar;