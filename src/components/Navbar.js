import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@material-ui/core';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link, useHistory } from 'react-router-dom'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';

export default function Navbar() {
    /*To add for tab indicator
    const [value, setValue] = useState(0);

    const handleClickTab = (e, newValue) => {
        setValue(newValue)
    }
    */

    return (
        <div>
            <AppBar color = "primary" position="sticky">
                <Toolbar>
                <GraphicEqIcon/>
                <Tabs>
                    <Tab icon = {<HomeIcon/>} label = "Home" component = {Link} to = "/"/> 
                    <Tab icon = {<ContactsIcon/>} label = "Contact" component = {Link} to = "/Contact"/> 
                    <Tab icon = {<BarChartIcon/>} label = "In progress"/> 
                </Tabs>

                </Toolbar>
            </AppBar>
        </div>
    )
}
