import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    selection: state.selection,
  };
};

export const LoginPage = (props) => {
  return (
    <div className="container my-5 px-5">
      <LoginForm />
    </div>
  );
};

export default connect(mapStateToProps)(LoginPage);
