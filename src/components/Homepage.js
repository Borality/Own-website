import React from 'react'
import Navbar from './Navbar';
import theme from '../utils/theme';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Card, CardContent, Grid } from '@material-ui/core';
import {Typography} from '@material-ui/core'
import homepage from '../images/homepage.jpg';
import { DiJsBadge, DiHtml5, DiCss3, DiJava} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { GoMarkGithub, GoGitBranch} from "react-icons/go";

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

export default function Homepage() {
    const classes = styles;
    return (
        <div style={{backgroundColor: "#ededed", width: "100%", minHeight: "100vh"}}>
            <Navbar/>
            <Grid container justify="center" alignItems="center">
                <Box my = {43.5} mx = {20} alignItems="center" justifyContent="center" textAlign="center" boxShadow={5} bgcolor = "#1e88e5" borderRadius={16}>
                    <Typography style = {classes.title}>I am Charles</Typography>
                    <Typography style = {classes.text} color = "primary" >A software developer.</Typography>
                    <Typography style = {classes.text} color = "primary" >Take a look around with the tabs on top!</Typography>
                </Box>
            </Grid>
        </div>
    )
}
