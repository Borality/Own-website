import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography, Icon} from '@material-ui/core';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';

export default function Navbar() {
    const [value, setValue] = useState(0);

    const handleClickTab = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <AppBar color = "primary">
                <Toolbar>
                <Typography> Charles Trangay </Typography>
                <Tabs onChange = {handleClickTab} indicatorColor = 'secondary' value = {value}>
                    <Tab icon = {<HomeIcon/>} label = "Home" /> 
                    <Tab icon = {<ContactsIcon/>} label = "Contact" /> 
                    <Tab icon = {<BarChartIcon/>} label = "In progress" /> 
                </Tabs>

                </Toolbar>
            </AppBar>
        </div>
    )
}
