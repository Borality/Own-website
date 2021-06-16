import { Box, Grid } from "@material-ui/core";
import React from "react";

const styles = {
	title: {
		color: "#202020",
		fontWeight: "600",
		//backgroundColor: "#303030",
	},
};

export default function ProjectsComp1() {
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
					//px={1.4}
					//py={1}
					mt={{ xs: 10, sm: 26, md: 26, lg: 38 }}
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
