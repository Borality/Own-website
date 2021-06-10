import React from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";
import ContactsIcon from "@material-ui/icons/Contacts";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../utils/theme";

export default function Navbar() {
  return (
    <div>
      {/**ThemeProvider changes color or just add css styles */}
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="sticky">
          <Toolbar>
            <div style={{ margin: "auto" }}>
              <Tabs>
                <Tab
                  disableTouchRipple
                  icon={<HomeIcon />}
                  label="Home"
                  component={Link}
                  to="/"
                />
                <Tab
                  disableTouchRipple
                  icon={<ContactsIcon />}
                  label="Contact"
                  component={Link}
                  to="/Contact"
                />
                <Tab
                  disableTouchRipple
                  icon={<BarChartIcon />}
                  label="Projects"
                  component={Link}
                  to="/Projects"
                />
              </Tabs>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
