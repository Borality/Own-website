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



const styles = {
  title: {
    color: "#E8E8E8",
    fontWeight: "600",
    backgroundColor: "#303030"
  },
};

export default function ProjectsComp1() {;
  const classes = styles;
  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ backgroundColor: "#ededed" }}
      >
        <Box
          px={1.4}
          py={1}
          my={{ xs: 2, sm: 16, md: 16, lg: 16 }}
          fontSize={{ xs: 35, sm: 60, md: 70, lg: 80 }}
          style={classes.title}
          textAlign="center"
        >
          Projects
        </Box>
      </Grid>
    </div>
  );
}
