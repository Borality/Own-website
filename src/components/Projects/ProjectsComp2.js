//React
import React from "react";
//MUI components
import { Box, Grid } from "@material-ui/core";
//Card component
import CardProjects from "./CardProjects";
//Card data
import CardMakerList from "./Data";

const getCardMaker = (props) => {
	//... is same thing as setting up all the prop values
	return (
		<Grid item lg={6} md={12} style={{ maxWidth: 445 }}>
			<CardProjects {...props}></CardProjects>
		</Grid>
	);
};

//Have to set grid item size equal to card size otherwise grid item bigger
export default function ProjectsComp2() {
	return (
		<div
			style={{
				paddingTop: "50px",
				paddingBottom: "50px",
				backgroundColor: "#ededed",
			}}
		>
			<Box style={{ backgroundColor: "#ededed" }}>
				<Grid container justify="center" spacing={2}>
					{CardMakerList.map((props) => getCardMaker(props))}
				</Grid>
			</Box>
		</div>
	);
}
