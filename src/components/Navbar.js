import React from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";
import ContactsIcon from "@material-ui/icons/Contacts";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../utils/theme";

const sectionItems = [
	{
		sectionTitle: "Home",
		pageUrl: "/",
		icon: <HomeIcon />,
	},
	{
		sectionTitle: "Contact",
		pageUrl: "/Contact",
		icon: <ContactsIcon />,
	},
	{
		sectionTitle: "Projects",
		pageUrl: "/Projects",
		icon: <BarChartIcon />,
	},
];

export default function Navbar() {
	return (
		<div>
			{/**ThemeProvider changes primary color or just add css styles */}
			<ThemeProvider theme={theme}>
				<AppBar color="primary" position="sticky">
					<Toolbar>
						<div style={{ margin: "auto" }}>
							<Tabs>
								{sectionItems.map((sectionItem) => {
									const { sectionTitle, pageUrl, icon } = sectionItem;
									return (
										<Tab
											disableTouchRipple
											icon={icon}
											label={sectionTitle}
											component={Link}
											to={pageUrl}
										/>
									);
								})}
								;
							</Tabs>
						</div>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}
