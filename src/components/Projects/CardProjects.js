//React
import React from "react";
//MUI components
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Box,
	Button,
	Grid,
	makeStyles,
} from "@material-ui/core";
//MUI styles
//Make sure maxWidth matches grid item size
//Add margin: "0 auto" to center box when maxwidth too small
const useStyles = makeStyles((theme) => ({
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
}));
const CardProjects = (props) => {
	const { image, alt, title, description, hrefWebsite, hrefCode } = props;
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root} elevation={10}>
				<CardActionArea disableTouchRipple>
					<CardMedia
						component="img"
						height="150"
						image={image}
						alt={alt}
						style={{ objectFit: "cover", objectPosition: "top" }}
					/>
					<CardContent>
						<Box
							mb={1}
							fontWeight="fontWeightBold"
							fontSize={{ xs: 17, sm: 25, md: 25, lg: 25 }}
						>
							{title}
						</Box>
						<Box
							style={{ color: "#787878", lineHeight: "1.55" }}
							component="p"
							fontSize={{ xs: 11, sm: 13, md: 13, lg: 13 }}
						>
							{description}
						</Box>
					</CardContent>
					<Grid container justify="center">
						<Box mx={0.5} mb={1}>
							<Button
								href={hrefWebsite}
								target="_blank"
								variant="outlined"
								size="small"
							>
								Website
							</Button>
						</Box>
						<Box mx={0.5} mb={1}>
							<Button
								href={hrefCode}
								target="_blank"
								variant="outlined"
								size="small"
							>
								Code
							</Button>
						</Box>
					</Grid>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default CardProjects;
