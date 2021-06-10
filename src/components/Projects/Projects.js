
import React from "react";
import LastComponent from "../LastComponent";
import Navbar from "../Navbar";
import ProjectsComp1 from "./ProjectsComp1";
import ProjectsComp2 from "./ProjectsComp2";

export default function Projects() {

  return (
    <div>
      <Navbar/>
      <ProjectsComp1/>
      <ProjectsComp2/>
      <LastComponent/>
    </div>
  );
}
