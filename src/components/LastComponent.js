import { Box, Grid, Link } from "@material-ui/core";
import React from "react";
import {Link as Link2} from 'react-router-dom'

export default function LastComponent() {
  return (
    <div>
      <Box px = {2} py = {2} style={{ backgroundColor: "white", color: "#909090" }}>
        <Grid container justify="center">
          <Box display="flex" flexDirection="row">
            <Box mx={1}>
              <Link underline="hover" style ={{color: "#909090"}} component = {Link2} to = "/">Home</Link>
            </Box>
            <Box mx={1}>
              <Link underline="hover" style ={{color: "#909090"}} component = {Link2} to = "/Contact">Contact</Link>
            </Box>
            <Box mx={1}>
              <Link underline="hover" style ={{color: "#909090"}} component = {Link2} to = "/Projects">Projects</Link>
            </Box>
          </Box>
        </Grid>
        <Grid container>
        <hr style = {{width: "24rem", marginTop: "0.25rem", marginBottom: "0.25rem"}}></hr>
        </Grid>
        <Grid container justify="center">
          <Box textAlign="center">Copyright © 2021 Charles Trangay. All rights reserved.</Box>
        </Grid>
      </Box>
    </div>
  );
}
