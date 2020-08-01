import React from "react";
import { SignupHeader } from "./SignupHeader";
import { InputField } from "../Login/InputField";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeSelection } from "../../redux/actions/selectionActions";
import $ from "jquery";

const mapStateToProps = (state) => {
  return {
    selection: state.selection,
  };
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.sendData = this.sendData.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkExistingUser = this.checkExistingUser.bind(this);
    this.state = {
      fNameInput: "",
      lNameInput: "",
      emailInput: "",
      passwordInput: "",
      confirmPasswordInput: "",
    };
  }

  checkPassword() {
    if (this.state.passwordInput === this.state.confirmPasswordInput) {
      return true;
    } else {
      return false;
    }
  }

  checkExistingUser() {
    $.ajax({
      url: "http://localhost:3000/api/check-user",
      type: "GET",
      data: { email: this.state.emailInput },
      contentType: "appilication/json; charset=utf-8",
      success: (serverData) => {
        return serverData;
      },
      error: (jqXHR, status, err) => {
        console.log("check user failed!");
        console.log("jqXHR: " + jqXHR);
        console.log("Status: " + status);
        console.log("Error: " + err);
        return true;
      },
    });
  }

  handleClick() {
    let newUser = {};
    if (this.checkPassword()) {
      newUser = {
        firstName: this.state.fNameInput,
        lastName: this.state.lNameInput,
        email: this.state.emailInput,
        password: this.state.passwordInput,
      };
      if (this.checkExistingUser() == false) {
        newUser = JSON.stringify(newUser);
        this.sendData(newUser);
      } else {
        // render component
        console.log("user exists");
      }
    } else {
      // show fix password
      console.log("passwords dont match");
    }
  }

  sendData(user) {
    $.ajax({
      url: "http://localhost:3000/api/create-user",
      type: "POST",
      data: user,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: () => {
        console.log("api request succesful");
      },
      error: () => {
        console.log("there was an error :(");
      },
    });
  }

  render() {
    return (
      <div className="container my-5 px-5">
        <SignupHeader
          title="Signup for Routinium"
          desc="The best free habit tracking solution"
        />

        <InputField
          id="fName"
          labelName="First Name"
          func={(e) => this.setState({ fNameInput: e.target.value })}
        />

        <InputField
          id="lName"
          labelName="Last Name"
          func={(e) => this.setState({ lNameInput: e.target.value })}
        />

        <InputField
          id="email"
          labelName="Email"
          func={(e) => this.setState({ emailInput: e.target.value })}
        />

        <InputField
          id="password"
          labelName="Password"
          func={(e) => this.setState({ passwordInput: e.target.value })}
        />

        <InputField
          id="confirmPassword"
          labelName="Confirm Password"
          func={(e) => this.setState({ confirmPasswordInput: e.target.value })}
        />

        <button
          className="btn btn-primary btn-block"
          onClick={this.handleClick}
        >
          Create Account
        </button>
        <Link to="/login">
          <button
            onClick={this.props.dispatch(changeSelection("login"))}
            className="btn btn-primary btn-block my-2"
          >
            Login
          </button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Signup);
