import React from 'react'
import Navbar from './Navbar';
import theme from '../utils/theme';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Card, CardContent } from '@material-ui/core';
import {Typography} from '@material-ui/core'
import homepage from '../images/homepage.jpg';
import { DiJsBadge, DiHtml5, DiCss3, DiJava} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { GoMarkGithub, GoGitBranch} from "react-icons/go";


export default function Homepage() {
    return (
        <div style={{ backgroundImage: `url(${homepage})` }}>
            <ThemeProvider theme = {theme}>
                <Navbar/>
            <Box mb = {0} m={20} p={1} alignItems="center" display = "flex" justifyContent="center" fontSize={26} textAlign="center" boxShadow={3} bgcolor = "#1e88e5" minWidth = "100vh" minHeight = "100vh" borderColor="primary.main" borderRadius={16}>
            <span>
                <Typography color = "primary" variant = "h1">I am Charles Trangay</Typography>
                <Typography color = "primary" variant = "h3">An upcoming software developer that is actively looking to improve and work with new technologies.</Typography>
                <Typography color = "primary" variant = "h3">Take a look around with the tabs on top or keep scrolling!</Typography>
            </span>
            </Box>
            <Box mb = {0} m={15} p={1} alignItems="center" display = "flex" justifyContent="center" fontSize={26} textAlign="center" boxShadow={3} bgcolor = "#1e88e5" minWidth = "100vh" minHeight = "100vh" borderColor="primary.main" borderRadius={16}>
            
            <Card borderRadius = {16}>
                <CardContent>
                    <Typography color = "primary" variant = "h1">Front end</Typography>
                    <Typography color = "primary" variant = "h3"><DiHtml5/>HTML</Typography>
                    <Typography color = "primary" variant = "h3"><DiCss3/>CSS</Typography>
                    <Typography color = "primary" variant = "h3"> <DiJsBadge/>Javascript</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography color = "primary" variant = "h1">Back end</Typography>
                    <Typography color = "primary" variant = "h3"><DiJava/>Java</Typography>
                    <Typography color = "primary" variant = "h3"><CgCPlusPlus/>C++/C</Typography>
                    <Typography color = "primary" variant = "h3"><CgCPlusPlus/>Matlab</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography color = "primary" variant = "h1">Version</Typography>
                    <Typography color = "primary" variant = "h1">control</Typography>
                    <Typography color = "primary" variant = "h3"><GoGitBranch/>Git</Typography>
                    <Typography color = "primary" variant = "h3"><GoMarkGithub/>Github</Typography>
                </CardContent>
            </Card>
            </Box>
            </ThemeProvider>
        </div>
    )
}
