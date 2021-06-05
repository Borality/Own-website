import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'
import projectBrochure from '../images/projectBrochure.PNG'
import weCook from '../images/weCook.PNG'
import { makeStyles } from '@material-ui/core/styles'
import { Link, useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const handleClick = () => {

}

export default function Projects() {
    const classes = useStyles();

    

    return (
        <div style={{backgroundColor: "#ededed", minHeight: "100vh"}}>
            <Navbar/>
            <Box style = {{fontSize: "4rem"}} my = {1} textAlign="center">
                Projects
            </Box>

            <Box pt = {7}>
                <Grid container justify="center">
                    <Box mx = {2} my = {2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia disableTouchRipple = "true" component="img" height="140" image = {projectBrochure} alt = "pizza" />
                                <CardContent>
                                <Typography gutterBottom component = "div">
                                    <Box fontWeight = "fontWeightBold" fontSize={25}>
                                        Pizza brochure website
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This website was a redesign of a popular pizza website using HTML/CSS, Javascript and React.
                                </Typography>
                                </CardContent>
                                <Grid container justify="center">
                                    <Box>
                                        <Button href="https://github.com/Borality/brochure-app" target="_blank" variant = "outlined">Code</Button>
                                    </Box>
                                    <Box ml = {1}>
                                        <Button href="https://brochurewebsite.netlify.app/" target="_blank" variant = "outlined">Website</Button>
                                    </Box>
                                </Grid>
                            </CardActionArea>
                        </Card>
                    </Box>

                    <Box mx = {2} my = {2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia disableTouchRipple = "true" component="img" height="140" image = {weCook} alt = "WeCook" />
                                <CardContent>
                                <Typography gutterBottom component = "div">
                                    <Box fontWeight = "fontWeightBold" fontSize={25}>
                                        WeCook website
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Full stack application built using React and other frameworks/libraries that utilized API's and a database for the backend. 
                                    It was a group project. I mainly focused on creating the frontend part of the application and the database to an extent.
                                </Typography>
                                </CardContent>
                                <Grid container justify="center">
                                    <Box>
                                        <Button href="https://github.com/Borality/WeCook" target="_blank" variant = "outlined">Code</Button>
                                    </Box>
                                </Grid>                          
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
            </Box>
        </div>
    )
}
