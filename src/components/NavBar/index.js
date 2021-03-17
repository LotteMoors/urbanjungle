import React from "react";
import { Head } from "./Nav";
import { SideBar } from "./Sidebar";

function NavBar() {
  return (
    <div id="outer-container">
      <SideBar pageWrapId={"outer-container"} />

      <Head />
    </div>
  );
}

export default NavBar;
