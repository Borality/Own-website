//React
import React from "react";
//MUI CSS components
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useStyles } from "./Contact.styles";

const Text = (props) => {
	const classes = useStyles();
	const { text, icon } = props;
	return (
		<Box fontSize={{ xs: 17, sm: 25, md: 28, lg: 30 }} className={classes.text}>
			{icon}
			{text}
		</Box>
	);
};

const data = [
	{
		text: "Email: charles.trangay11@gmail.com",
		icon: <EmailIcon fontSize="inherit" />,
	},
	{
		text: "Phone: 732-877-4032",
		icon: <PhoneIcon fontSize="inherit" />,
	},
	{
		text: "Github: https://github.com/Borality",
		icon: <GitHubIcon fontSize="inherit" />,
	},
];

export default function Contact() {
	const classes = useStyles();
	const boxProps = {
		my: { xs: 10, sm: 26, md: 26, lg: 36 },
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	};
	const gridProps = {
		container: "true",
		justify: "center",
		alignItems: "center",
	};
	const titleProps = { my: 2, fontSize: { xs: 35, sm: 60, md: 70, lg: 80 } };

	return (
		<div style={{ width: "100%" }}>
			<Grid {...gridProps} className={classes.background}>
				{/* Don't go higher than 16 vertical margin for smaller devices else screen breaks*/}
				<Box {...boxProps}>
					{/* Setting responsive sizes for mobile fontSize, fontSize inherit is responsive */}
					<Box {...titleProps} className={classes.title}>
						Contact me
					</Box>
					<Box lineHeight="2.8rem">
						{data.map((data) => {
							return <Text text={data.text} icon={data.icon} />;
						})}
					</Box>
				</Box>
			</Grid>
		</div>
	);
}
