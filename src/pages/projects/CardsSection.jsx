//React
import React from "react";
//MUI components
import { Box, Grid } from "@material-ui/core";
//Card component
import CardProjects from "./CardProjects";
//Card data
import CardMakerList from "./Data";
//CSS styles
import { styles } from "./Projects.styles";
const getCardMaker = (props) => {
	//... is the same thing as setting up all the prop values
	return (
		<Grid item lg={6} md={12} style={{ maxWidth: 445 }}>
			<CardProjects {...props}></CardProjects>
		</Grid>
	);
};

//Have to set grid item size equal to card size otherwise grid item bigger
export default function ProjectsComp2() {
	const classes = styles;
	const boxProps = {py:5}
	const gridProps = {container: "true", justify:"center", spacing:2}
	return (
		<div>
			<Box {...boxProps} style={classes.background}>
				<Grid {...gridProps}>
					{CardMakerList.map((props) => getCardMaker(props))}
				</Grid>
			</Box>
		</div>
	);
}
