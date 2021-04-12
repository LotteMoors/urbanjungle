import React from "react";
import Head from "./Nav";
import { connect } from "react-redux";
import { SignedIn } from "./Sidebar/SignedIn";

function NavBar(props) {
  const { auth } = props;
  const links = auth.uid ? (
    <SignedIn pageWrapId={"outer-container"} />
  ) : (
    null
  );

  return (
    <div id="outer-container" style={{ height: "4.4em",width:'100%', minWidth:'5vh', position:'fixed', top:0, zIndex:2}}>
      {links}
      <Head />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(NavBar);
