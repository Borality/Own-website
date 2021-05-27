import React from 'react'
import Navbar from './Navbar';
import theme from '../utils/theme';
import { ThemeProvider } from '@material-ui/styles';
import {Typography} from '@material-ui/core'
import Box from '@material-ui/core/Box';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Contact() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <ThemeProvider theme = {theme}>
                <Navbar/>
            <Box mb = {17} m={20} p={1} alignItems="center" display = "flex" justifyContent="center" fontSize={26} textAlign="center" boxShadow={3} bgcolor = "#1e88e5" minWidth = "100vh" minHeight = "100vh" borderColor="primary.main" borderRadius={16}>
            <span>
                <Typography color = "primary" variant = "h1">Contact me below</Typography>
                <Typography color = "primary" variant = "h2"><EmailIcon style={{ fontSize: 50 }}/>Email: charles.trangay11@gmail.com</Typography>
                <Typography color = "primary" variant = "h2"><PhoneIcon style={{ fontSize: 50 }}/>phone: 732-877-4032</Typography>
                <Typography color = "primary" variant = "h2"><GitHubIcon style={{ fontSize: 50 }}/>github: https://github.com/Borality</Typography>

            </span>
            </Box>
            </ThemeProvider>
        </div>
    )
}
