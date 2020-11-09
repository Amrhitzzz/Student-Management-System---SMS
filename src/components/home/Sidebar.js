import React from 'react';
// import HomeIcon from '@material-ui/icons/Home';
// import MailIcon from '@material-ui/icons/Mail';
// import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// import PeopleIcon from '@material-ui/icons/People';
// import AcUnitIcon from '@material-ui/icons/AcUnit';
// import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import HomeIcon from '@material-ui/icons/Home'
import MarkunreadIcon from '@material-ui/icons/Markunread'
import AssignmentIcon from '@material-ui/icons/Assignment'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import SettingsIcon from '@material-ui/icons/Settings'

const Sidebar = () => {
    return (
        <>
          <HomeIcon />
          <MarkunreadIcon />
          <AssignmentIcon/>
          <FormatListNumberedIcon />
          <SupervisorAccountIcon />
          <SettingsIcon />
          <AssignmentTurnedInIcon />
        </>
    )
}

export default Sidebar;