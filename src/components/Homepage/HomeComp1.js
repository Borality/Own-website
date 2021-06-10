import React from "react";
import { Box, Grid } from "@material-ui/core";

export default function HomeComp1() {
  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ backgroundColor: "#ededed" }}
      >
        <Box mb={6} mt={{ xs: 10, sm: 26, md: 26, lg: 36 }} textAlign="center">
          <Box
            px={1.4}
            py={1}
            my={2}
            fontSize={{ xs: 35, sm: 60, md: 70, lg: 80 }}
            style={{
              backgroundColor: "#303030",
              color: "#E8E8E8",
              fontWeight: "600",
            }}
          >
            Charles Trangay
          </Box>
          <Box
            fontSize={{ xs: 17, sm: 25, md: 28, lg: 30 }}
            style={{ color: "#282828" }}
          >
            A software developer
          </Box>
          <Box
            fontSize={{ xs: 17, sm: 25, md: 28, lg: 30 }}
            style={{ color: "#282828" }}
          >
            Take a look around!
          </Box>
        </Box>
      </Grid>
    </div>
  );
}
