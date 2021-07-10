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
} from "@material-ui/core";
//CSS styles
import { useStyles } from "./Projects.styles";

const CardProjects = (props) => {
	const { image, alt, title, description, hrefWebsite, hrefCode } = props;
	const classes = useStyles();
	const buttonProps = { target: "_blank", variant: "outlined", size: "small" };
	const titleProps = {
		mb: 1,
		fontSize: { xs: 17, sm: 25, md: 25, lg: 25 },
		fontWeight: "fontWeightBold",
	};
	const cardMediaProps = { component: "img", height: "150" };
	const cardDescriptionProps = {
		component: "p",
		fontSize: { xs: 11, sm: 13, md: 13, lg: 13 },
	};
	return (
		<div>
			<Card className={classes.root} elevation={10}>
				<CardActionArea disableTouchRipple>
					<CardMedia
						{...cardMediaProps}
						image={image}
						alt={alt}
						className={classes.cardMediaImages}
					/>
					<CardContent>
						<Box {...titleProps}>{title}</Box>
						<Box
							className={classes.cardDescription}
							{...cardDescriptionProps}
						>
							{description}
						</Box>
					</CardContent>
					<Grid container justify="center">
						<Box mx={0.5} mb={1}>
							<Button href={hrefWebsite} {...buttonProps}>
								Website
							</Button>
						</Box>
						<Box mx={0.5} mb={1}>
							<Button href={hrefCode} {...buttonProps}>
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
