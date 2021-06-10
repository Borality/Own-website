import React from "react";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";

const styles = {
  title: {
    backgroundColor: "#303030",
    color: "#E8E8E8",
    fontWeight: "600",
  },
  text: {
    color: "#282828",
  },
};

export default function ContactComp1() {
  const classes = styles;
  return (
    <div style={{ width: "100%" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ backgroundColor: "#ededed" }}
      >
        {/* Don't go higher than 16 vertical margin for smaller devices else screen breaks*/}
        <Box
          my={{ xs: 10, sm: 26, md: 26, lg: 36 }}
          mx="auto"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          border={0}
        >
          {/* Setting responsive sizes for mobile fontSize inherit is responsive */}
          <Box
            px={1.4}
            py={1}
            my={2}
            fontSize={{ xs: 35, sm: 60, md: 70, lg: 80 }}
            style={classes.title}
          >
            Reach me below
          </Box>
          <Box lineHeight="2.8rem">
            <Box
              fontSize={{ xs: 17, sm: 25, md: 28, lg: 30 }}
              style={classes.text}
            >
              <EmailIcon fontSize="inherit" />
              Email: charles.trangay11@gmail.com
            </Box>
            <Box
              fontSize={{ xs: 17, sm: 25, md: 28, lg: 30 }}
              style={classes.text}
            >
              <PhoneIcon fontSize="inherit" />
              Phone: 732-877-4032
            </Box>
            <Box
              fontSize={{ xs: 17, sm: 25, md: 28, lg: 30 }}
              style={classes.text}
            >
              <GitHubIcon fontSize="inherit" />
              Github: https://github.com/Borality
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
}
