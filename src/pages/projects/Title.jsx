//React
import React from "react";
//MUI components
import { Box, Grid } from "@material-ui/core";
//CSS styles
import { styles } from "./Projects.styles";

export default function ProjectsComp1() {
	const classes = styles;
	const gridProps = {
		container: "true",
		justify: "center",
		alignItems: "center",
	};
	const titleProps = {
		mt: { xs: 10, sm: 26, md: 26, lg: 38 },
		fontSize: { xs: 35, sm: 60, md: 70, lg: 80 },
		textAlign: "center",
	};
	return (
		<div>
			<Grid {...gridProps} style={classes.background}>
				<Box {...titleProps} style={classes.title}>
					Projects
				</Box>
			</Grid>
		</div>
	);
}
