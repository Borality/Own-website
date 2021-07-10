//React
import React from "react";
//MUI components
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./Home.styles";
import Svg from "./Svg";

//Text component
const Text = (props) => {
	const classes = useStyles();
	const { text } = props;
	const nameProps = {fontSize:{ xs: 17, sm: 25, md: 28, lg: 30 }}
	return (
		<Box {...nameProps} className={classes.text}>
			{text}
		</Box>
	);
};

export default function Homepage() {
	const classes = useStyles();
	const boxPaddingProps = { mb: 6, mt: { xs: 10, sm: 26, md: 26, lg: 36 } };
	const gridProps = {
		container: "true",
		justify: "center",
		alignItems: "center",
	};
	const titleProps = { my: 2, fontSize: { xs: 35, sm: 60, md: 70, lg: 80 } };
	return (
		<div>
			<Grid {...gridProps} className={classes.background}>
				<Box {...boxPaddingProps} textAlign="center">
					<Box
						{...titleProps}
						className={classes.title}
					>
						Charles Trangay
					</Box>
					<Text text="A software developer" />
				</Box>
			</Grid>
			<Svg />
		</div>
	);
}
