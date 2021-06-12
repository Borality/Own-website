import React from "react";
import {
	AppBar,
	Tab,
	Tabs,
	Toolbar,
	Hidden,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from "@material-ui/core";
import ContactsIcon from "@material-ui/icons/Contacts";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import MenuIcon from "@material-ui/icons/Menu";
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

//To hide tabs just use display: none or MUI Hide
export default function Navbar() {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};
	return (
		<div>
			{/**ThemeProvider changes primary color or just add css styles */}
			<ThemeProvider theme={theme}>
				<AppBar color="primary" position="sticky">
					<Toolbar>
						<Box margin={{ sm: "auto" }}>
							<Tabs>
								<Hidden xsDown>
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
								</Hidden>
								<Hidden smUp>
									<Tab
										disableTouchRipple
										icon={<MenuIcon />}
										onClick={toggleDrawer}
									/>
								</Hidden>
							</Tabs>
						</Box>
					</Toolbar>
					<Hidden smUp>
						<Drawer
							anchor="left"
							variant="temporary"
							onClose={toggleDrawer}
							open={drawerOpen}
						>
							<List>
								{sectionItems.map((props) => (
									<ListItem
										onClick={toggleDrawer}
										button
										key={props.sectionTitle}
										component="a"
										href={props.pageUrl}
										primary={props.sectionTitle}
									>
										<ListItemIcon>{props.icon}</ListItemIcon>
										<ListItemText>{props.sectionTitle}</ListItemText>
									</ListItem>
								))}
							</List>
						</Drawer>
					</Hidden>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}
