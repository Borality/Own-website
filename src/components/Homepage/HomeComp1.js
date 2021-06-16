//React
import React from "react";
//MUI components
import { Box, Grid, makeStyles } from "@material-ui/core";
//MUI CSS styles
const useStyles = makeStyles({
	title: {
		//backgroundColor: "#303030",
		color: "#202020",
		fontWeight: "600",
	},
	text: {
		color: "#282828",
	},
});
//Text component
const Text = (props) => {
	const classes = useStyles();
	const { text } = props;
	return (
		<Box fontSize={{ xs: 17, sm: 25, md: 28, lg: 30 }} className={classes.text}>
			{text}
		</Box>
	);
};

export default function HomeComp1() {
	const classes = useStyles();
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
						//px={1.4}
						//py={1}
						my={2}
						fontSize={{ xs: 35, sm: 60, md: 70, lg: 80 }}
						className={classes.title}
					>
						Charles Trangay
					</Box>
					<Text text="A software developer" />
					<Text text="Take a look around" />
				</Box>
			</Grid>
		</div>
	);
}
