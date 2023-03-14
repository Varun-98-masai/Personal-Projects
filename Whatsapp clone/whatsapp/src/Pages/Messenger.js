import React, { Fragment } from "react";
import { connect } from "react-redux";
import Inbox from "./Inbox";
import Chatbox from "./Chatbox";
const Messenger = () => {
  return (
    <Fragment>
      <div className={"green-belt"}>
        <div className={"messenger fixed flex"}>
          <Inbox />
          <Chatbox />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateProps = (state) => {
  return {
    loaded: state.app.loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: "APP_STATE", state: { loaded: loaded } }),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Messenger);
