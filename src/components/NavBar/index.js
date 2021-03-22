import React from "react";
import { Head } from "./Nav";
import { SignedIn } from "./Sidebar/SignedIn";
// import { SignedOut } from "./Sidebar/SignedOut";
import { connect } from 'react-redux'

function NavBar() {
  return (
    <div id="outer-container" style={{maxHeight:"5vh"}}>
      <SignedIn pageWrapId={"outer-container"} />
      {/* <SignedOut pageWrapId={"outer-container"} /> */}

      <Head />
    </div>
  );
}

export default connect()(NavBar);
