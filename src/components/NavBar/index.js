import React from "react";
import Head from "./Nav";
import { connect } from "react-redux";
import { SignedIn } from "./Sidebar/SignedIn";
import { SignedOut } from "./Sidebar/SignedOut";

function NavBar(props) {
  const { auth } = props;
  const links = auth.uid ? (
    <SignedIn pageWrapId={"outer-container"} />
  ) : (
    <SignedOut pageWrapId={"outer-container"} />
  );

  return (
    <div id="outer-container" style={{ maxHeight: "5vh" }}>
      {links}
      <Head />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(NavBar);
