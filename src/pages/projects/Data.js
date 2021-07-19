//Images
import projectBrochure from "../../images/projectBrochure.PNG";
import weCook from "../../images/weCook.PNG";
import crudApp from "../../images/crudApp.PNG"
//Stores data of the cards
export default [
	{
		image: projectBrochure,
		alt: "pizza",
		title: "Pizza brochure website",
		description:
			"This website was a redesign of a popular pizza website using HTML/CSS, Javascript and React.",
		hrefWebsite: "https://brochure-app.vercel.app/",
		hrefCode: "https://github.com/Borality/brochure-app",
	},
	{
		image: weCook,
		alt: "WeCook",
		title: "WeCook website",
		description:
			"Full stack application built using React and other frameworks/libraries that utilized API's and a database for the backend. It was a group project. I mainly focused on creating the frontend part of the application and the database to an extent.",
		hrefWebsite: "https://github.com/Borality/WeCook",
		hrefCode: "https://github.com/Borality/WeCook",
	},
	{
		image: crudApp,
		alt: "crud app picture",
		title: "CRUD website",
		description: "A basic CRUD application using React, Material UI, MYSQL, ExpressJS.",
		button: "Website",
		hrefWebsite: "https://github.com/Borality/CRUD-APP",
		hrefCode: "https://github.com/Borality/CRUD-APP",
	},
];
