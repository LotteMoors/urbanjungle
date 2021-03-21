import React from "react";
import { Head } from "./Nav";
import { SideBar } from "./Sidebar";

function NavBar() {
  return (
    <div id="outer-container" style={{maxHeight:"5vh"}}>
      <SideBar pageWrapId={"outer-container"} />

      <Head />
    </div>
  );
}

export default NavBar;
