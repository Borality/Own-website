import React from "react";
import Navbar from "./Navbar";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import LastComponent from "./LastComponent";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

const styles = {
  title: {
    overflowWrap: "normal",
    color: "#E8E8E8",
    fontWeight: "600"
  },
  text: {
    overflowWrap: "normal",
    color: "#282828",
  },
};

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Homepage() {
  const classes = styles;
  return (
    <div
      style={{width: "100%", minHeight: "100vh", overflowX: "hidden" }}
    >
      <Navbar />
      <Grid container justify="center" alignItems="center" style={{ backgroundColor: "#ededed"}}>
        <Box
          mt={40}
          mb = {5}
          mx={20}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          border={0}
        >
          <ThemeProvider theme={theme}>
            <Box px = {1.4} py = {1.4} my = {2} style = {{backgroundColor: "#303030"}}>
            <Typography style={classes.title} variant="h1">
              Charles Trangay
            </Typography>
            </Box>
            <Typography style={classes.text} variant="h4">
              A software developer
            </Typography>
            <Typography style={classes.text} variant="h4">
              Take a look around!
            </Typography>
          </ThemeProvider>
        </Box>
      </Grid>
      <svg style = {{display: "flex", backgroundColor: "#ededed"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#14248A" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,101.3C672,107,768,181,864,197.3C960,213,1056,171,1152,133.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <LastComponent/>
    </div>
  );
}
