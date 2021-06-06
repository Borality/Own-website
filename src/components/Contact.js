import React from 'react'
import Navbar from './Navbar';
import theme from '../utils/theme';
import { ThemeProvider } from '@material-ui/styles';
import {Grid, Typography} from '@material-ui/core'
import Box from '@material-ui/core/Box';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = {
    title: {
        fontSize: "5rem",
        overflowWrap: "normal",
        color: "#14248A",
    },
    text: {
        fontSize: "2.5rem",
        overflowWrap: "normal",
        color: "#14248A",
    },
}

export default function Contact() {
    const classes = styles;
    return (
        <div style={{backgroundColor: "#ededed", width: "100%", minHeight: "100vh"}}>
            <Navbar/>
            <Grid container justify = 'center' alignItems="center">
                <Box my = {40} mx = {20} alignItems="center" justifyContent="center" textAlign="center" border={0}>
                    <Typography style = {classes.title}>Contact me</Typography>
                    <Typography style = {classes.text}><EmailIcon style={{ fontSize: "2.5rem" }}/>Email: charles.trangay11@gmail.com</Typography>
                    <Typography style = {classes.text}><PhoneIcon style={{ fontSize: "2.5rem" }}/>phone: 732-877-4032</Typography>
                    <Typography style = {classes.text}><GitHubIcon style={{ fontSize: "2.5rem" }}/>github: https://github.com/Borality</Typography>
                </Box>
            </Grid>
            
        </div>
    )
}
