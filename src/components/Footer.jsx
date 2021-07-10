//React
import React from "react";
//MUI components
import { Box, Divider, Grid, Link } from "@material-ui/core";
//React router
import { Link as Link2 } from "react-router-dom";
//CSS styles
import { styles } from "./Footer.styles";

const data = [
	{
		text: "Home",
		link: "/",
	},
	{
		text: "Contact",
		link: "/Contact",
	},
	{
		text: "Projects",
		link: "/Projects",
	},
];

const LinkCustom = (props) => {
	const classes = styles;
	const { text, link } = props;
	return (
		<Box mx={1}>
			<Link style={classes.link} underline="hover" component={Link2} to={link}>
				{text}
			</Link>
		</Box>
	);
};
export default function LastComponent() {
	const classes = styles;
	const boxProps = {
		py: 3,
		mx: "auto",
		display: "flex",
		flexDirection: "column",
	};
	return (
		<div>
			<Box {...boxProps} style={classes.footer}>
				<Grid container justify="center">
					<Box display="flex" flexDirection="row" fontSize={12}>
						{data.map((props) => {
							return <LinkCustom {...props} />;
						})}
					</Box>
				</Grid>
				<Box style={classes.line}>
					<Divider></Divider>
				</Box>
				<Box fontSize={12} textAlign="center">
					Copyright © 2021 Charles Trangay. All rights reserved.
				</Box>
			</Box>
		</div>
	);
}
