//React
import React from "react";
//Page components
import ContactComp1 from "./ContactComp1";
import LastComponent from "../LastComponent";
import Navbar from "../Navbar";

export default function Contact() {
	return (
		<div>
			<Navbar />
			<ContactComp1 />
			<LastComponent />
		</div>
	);
}
