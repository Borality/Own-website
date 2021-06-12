//React
import React from "react";
//Page components
import HomeComp1 from "./HomeComp1";
import Svg from "./Svg";
import LastComponent from "../LastComponent";
import Navbar from "../Navbar";

export default function Homepage() {
	return (
		<div>
			<Navbar />
			<HomeComp1 />
			<Svg />
			<LastComponent />
		</div>
	);
}
