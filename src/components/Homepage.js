import React from "react";
import Navbar from "./Navbar";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

const styles = {
  title: {
    overflowWrap: "normal",
    color: "#14248A",
  },
  text: {
    overflowWrap: "normal",
    color: "#14248A",
  },
};

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Homepage() {
  const classes = styles;
  return (
    <div
      style={{ backgroundColor: "#ededed", width: "100%", minHeight: "100vh" }}
    >
      <Navbar />
      <Grid container justify="center" alignItems="center">
        <Box
          my={43.5}
          mx={20}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          border={0}
        >
          <ThemeProvider theme={theme}>
            <Typography style={classes.title} variant="h1">
              I am Charles
            </Typography>
            <Typography style={classes.text} variant="h4">
              A software developer
            </Typography>
            <Typography style={classes.text} variant="h4">
              Take a look around!
            </Typography>
          </ThemeProvider>
        </Box>
      </Grid>
    </div>
  );
}
