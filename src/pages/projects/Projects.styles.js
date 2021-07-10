import { makeStyles } from "@material-ui/core";

export const styles = {
	title: {
		color: "#202020",
		fontWeight: "600",
	},
	background: {
		backgroundColor: "#ededed",
	},
};

//MUI styles
//Make sure maxWidth matches grid item size
//Add margin: "0 auto" to center box when maxWidth too small
export const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 445,
		transition: "0.4s ease-out",
		[theme.breakpoints.down("xs")]: {
			maxWidth: 280,
		},
		"&:hover": {
			transform: "translateY(-10px)",
		},
	},
	cardMediaImages: {
		objectFit: "cover",
		objectPosition: "top",
	},
	cardDescription: {
		color: "#787878",
		lineHeight: "1.55",
	},
}));
