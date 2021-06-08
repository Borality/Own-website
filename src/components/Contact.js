import React from "react";
import Navbar from "./Navbar";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
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

export default function Contact() {
  const classes = styles;
  return (
    <div
      style={{ backgroundColor: "#ededed", width: "100%", minHeight: "100vh" }}
    >
      <Navbar />
      <Grid container justify="center" alignItems="center">
        <Box
          my={40}
          mx={20}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          border={0}
        >
          <ThemeProvider theme={theme}>
            <Box px = {1.4} py = {1.4} my = {2} style = {{backgroundColor: "#303030"}}>
            <Typography style={classes.title} variant="h1">
              Reach me below
            </Typography>
            </Box>
            <Typography style={classes.text} variant="h4">
              <EmailIcon style={{ fontSize: "2.5rem" }} />
              Email: charles.trangay11@gmail.com
            </Typography>
            <Typography style={classes.text} variant="h4">
              <PhoneIcon style={{ fontSize: "2.5rem" }} />
              Phone: 732-877-4032
            </Typography>
            <Typography style={classes.text} variant="h4">
              <GitHubIcon style={{ fontSize: "2.5rem" }} />
              Github: https://github.com/Borality
            </Typography>
          </ThemeProvider>
        </Box>
      </Grid>
      <LastComponent/>
    </div>
  );
}
