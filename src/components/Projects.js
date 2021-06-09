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
import Navbar from "./Navbar";
import projectBrochure from "../images/projectBrochure.PNG";
import weCook from "../images/weCook.PNG";
import { makeStyles } from "@material-ui/core/styles";
import LastComponent from "./LastComponent";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const styles = {
  title: {
    color: "#E8E8E8",
    fontWeight: "600"
  },
};

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


export default function Projects() {
  const classes = useStyles();
  const classes2 = styles;
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Box style={{ backgroundColor: "#ededed"}}>
      <ThemeProvider theme={theme}>
        <Grid container justify = "center">
        <Box px = {1.4} py = {1} mt = {{xs:20, sm: 25, md: 35, lg: 35}} fontSize = {{xs:35, sm: 60, md: 70, lg: 80}} style = {{backgroundColor: "#303030", color: "#E8E8E8", fontWeight: "600"}}>
          Projects
        </Box>
        </Grid>
      </ThemeProvider>

      <Box py ={7}>
        <Grid container justify="center">
          <Box mx={2} my={2}>
            <Card className={classes.root}>
              <CardActionArea disableTouchRipple>
                <CardMedia
                  component="img"
                  height="140"
                  image={projectBrochure}
                  alt="pizza"
                  style = {{objectFit: "cover",
                  objectPosition: "top",}}
                />
                <CardContent>
                  <Typography gutterBottom component="div">
                    <Box fontWeight="fontWeightBold" fontSize={25}>
                      Pizza brochure website
                    </Box>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This website was a redesign of a popular pizza website using
                    HTML/CSS, Javascript and React.
                  </Typography>
                </CardContent>
                <Grid container justify="center">
                  <Box>
                    <Button
                      href="https://github.com/Borality/brochure-app"
                      target="_blank"
                      variant="outlined"
                    >
                      Code
                    </Button>
                  </Box>
                  <Box ml={1}>
                    <Button
                      href="https://brochurewebsite.netlify.app/"
                      target="_blank"
                      variant="outlined"
                    >
                      Website
                    </Button>
                  </Box>
                </Grid>
              </CardActionArea>
            </Card>
          </Box>

          <Box mx={2} my={2}>
            <Card className={classes.root}>
              <CardActionArea disableTouchRipple>
                <CardMedia
                  component="img"
                  height="140"
                  image={weCook}
                  alt="WeCook"
                  style = {{objectFit: "cover",
                  objectPosition: "top left",}}
                />
                <CardContent>
                  <Typography gutterBottom component="div">
                    <Box fontWeight="fontWeightBold" fontSize={25}>
                      WeCook website
                    </Box>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Full stack application built using React and other
                    frameworks/libraries that utilized API's and a database for
                    the backend. It was a group project. I mainly focused on
                    creating the frontend part of the application and the
                    database to an extent.
                  </Typography>
                </CardContent>
                <Grid container justify="center">
                  <Box>
                    <Button
                      href="https://github.com/Borality/WeCook"
                      target="_blank"
                      variant="outlined"
                    >
                      Code
                    </Button>
                  </Box>
                </Grid>
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Box>
      </Box>
      <LastComponent/>
    </div>
  );
}
