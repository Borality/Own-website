import React from "react";
import HomeComp1 from "./HomeComp1";
import LastComponent from "../LastComponent";
import Navbar from "../Navbar";

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <HomeComp1/>
      <LastComponent/>
    </div>
  );
}
