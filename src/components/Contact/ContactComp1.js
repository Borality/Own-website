import React from "react";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";


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


export default function ContactComp1() {
  const classes = styles;
  return (
    <div
      style={{ width: "100%" }}
    >
      <Grid container justify="center" alignItems="center" style={{ backgroundColor: "#ededed"}}>
          {/* Don't go higher than 16 for smaller devices */}
        <Box
          my={{xs:10, sm: 26, md: 26, lg: 36}}
          mx="auto"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          border={0}
        >
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
        </Box>
      </Grid>
    </div>
  );
}
