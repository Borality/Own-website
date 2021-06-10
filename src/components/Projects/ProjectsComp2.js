import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import projectBrochure from "../../images/projectBrochure.PNG";
  import weCook from "../../images/weCook.PNG";
  import { makeStyles } from "@material-ui/core/styles";
  import useMediaQuery from "@material-ui/core/useMediaQuery";
  import { useTheme } from "@material-ui/styles";

  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
      [theme.breakpoints.down("xs")] : {
        maxWidth: 200 
      }
    },
    }));
  
  export default function ProjectsComp2() {
    const classes = useStyles();
    const theme = useTheme();
    return (
      <div>
        <Grid
          container
          justify="center"
          style={{ backgroundColor: "#ededed" }}
          
        >
          <Box display = "flex">
            <Box mx={1} my={1}>
              <Card className={classes.root}>
                <CardActionArea disableTouchRipple>
                  <CardMedia
                    component="img"
                    height="140"
                    image={projectBrochure}
                    alt="pizza"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <CardContent>
                      <Box mb = {1} fontWeight="fontWeightBold" fontSize = {{xs:17, sm: 25, md: 25, lg: 25}}>
                        Pizza brochure website
                      </Box>
                    <Box
                      style = {{color: "#787878", lineHeight: "1.55"}}
                      component="p"
                      fontSize = {{xs:10, sm: 13, md: 13, lg: 13}}
                    >
                      This website was a redesign of a popular pizza website using
                      HTML/CSS, Javascript and React.
                    </Box>
                  </CardContent>
                  <Grid container justify="center">
                    <Box>
                      <Button
                        href="https://github.com/Borality/brochure-app"
                        target="_blank"
                        variant="outlined"
                        size = "small"
                      >
                        Code
                      </Button>
                    </Box>
                    <Box ml={1}>
                      <Button
                        href="https://brochurewebsite.netlify.app/"
                        target="_blank"
                        variant="outlined"
                        size = "small"
                      >
                        Website
                      </Button>
                    </Box>
                  </Grid>
                </CardActionArea>
              </Card>
            </Box>
  
            <Box mx={1} my={1}>
              <Card className={classes.root}>
                <CardActionArea disableTouchRipple>
                  <CardMedia
                    component="img"
                    height="140"
                    image={weCook}
                    alt="WeCook"
                    style={{ objectFit: "cover", objectPosition: "top left" }}
                  />
                  <CardContent>
                    <Box mb = {1}>
                      <Box fontWeight="fontWeightBold" fontSize = {{xs:17, sm: 25, md: 25, lg: 25}}>
                        WeCook website
                      </Box>
                    </Box>
                    <Box
                      style = {{color: "#787878", lineHeight: "1.55"}}
                      component="p"
                      fontSize = {{xs:10, sm: 13, md: 13, lg: 13}}
                    >
                      Full stack application built using React and other
                      frameworks/libraries that utilized API's and a database for
                      the backend. It was a group project. I mainly focused on
                      creating the frontend part of the application and the
                      database to an extent.
                    </Box>
                  </CardContent>
                  <Grid container justify="center">
                    <Box>
                      <Button
                        href="https://github.com/Borality/WeCook"
                        target="_blank"
                        variant="outlined"
                        size = "small"
                      >
                        Code
                      </Button>
                    </Box>
                  </Grid>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        
        </Grid>
      </div>
    );
  }
  