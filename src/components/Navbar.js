import React from 'react'
import {AppBar, Tab, Tabs, Toolbar} from '@material-ui/core';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from 'react-router-dom'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/theme';

export default function Navbar() {
    /*To add for tab indicator
    const [value, setValue] = useState(0);

    const handleClickTab = (e, newValue) => {
        setValue(newValue)
    }
    */

    return (
        <div>
            <ThemeProvider theme = {theme}>
            <AppBar color = "primary" position="sticky">
                <Toolbar>
                <GraphicEqIcon/>
                <div style = {{margin: "auto"}}>
                <Tabs>
                    <Tab disableTouchRipple icon = {<HomeIcon/>} label = "Home" component = {Link} to = "/"/> 
                    <Tab disableTouchRipple icon = {<ContactsIcon/>} label = "Contact" component = {Link} to = "/Contact"/> 
                    <Tab disableTouchRipple icon = {<BarChartIcon/>} label = "Projects" component = {Link} to = "/Projects"/> 
                </Tabs>
                </div>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </div>
    )
}
