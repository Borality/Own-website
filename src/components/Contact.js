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
      style={{ width: "100%", minHeight: "100vh" }}
    >
      <Navbar />
      <Grid container justify="center" alignItems="center" style={{ backgroundColor: "#ededed"}}>
        <Box
          my={{xs:20, sm: 35, md: 40, lg: 40}}
          mx="auto"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          border={0}
        >
          <ThemeProvider theme={theme}>
            <Box px = {1.4} py = {1} my = {2} fontSize = {{xs:35, sm: 60, md: 70, lg: 80}} style = {{backgroundColor: "#303030", color: "#E8E8E8", fontWeight: "600"}}>
              Reach me below
            </Box>
            <Box fontSize={{xs:15, sm: 30, md: 30, lg: 30}} style = {{ color: "#282828"}}>
              <EmailIcon style={{ fontSize: "2.5rem" }} />
              Email: charles.trangay11@gmail.com
            </Box>
            <Box fontSize={{xs:15, sm: 30, md: 30, lg: 30}} style = {{ color: "#282828"}}>
              <PhoneIcon style={{ fontSize: "2.5rem" }} />
              Phone: 732-877-4032
            </Box>
            <Box fontSize={{xs:15, sm: 30, md: 30, lg: 30}} style = {{ color: "#282828"}}>
              <GitHubIcon style={{ fontSize: "2.5rem" }} />
              Github: https://github.com/Borality
            </Box>
          </ThemeProvider>
        </Box>
      </Grid>
      <LastComponent/>
    </div>
  );
}
