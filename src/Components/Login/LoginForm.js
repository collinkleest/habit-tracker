import React from "react";
import { LoginHeader } from "./LoginHeader";
import { InputField } from "./InputField";
import { connect } from "react-redux";
import { changeSelection } from "../../redux/actions/selectionActions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    selection: state.selection,
  };
};

const LoginForm = (props) => {
  return (
    <form>
      <LoginHeader
        title="Habit Tracker"
        desc="Please login to access your habits"
      />
      <InputField id="email-username" labelName="Email or Username" />
      <InputField id="password" labelName="Password" />
      <button className="btn btn-primary btn-block">Login</button>
      <div className="text-center">
        <p>
          <Link
            to="/register"
            onClick={() => props.dispatch(changeSelection("register"))}
          >
            Dont have an account? Create one
          </Link>
        </p>
        <p>
          <a href="#">Forgot Password?</a>
        </p>
      </div>
    </form>
  );
};

export default connect(mapStateToProps)(LoginForm);
