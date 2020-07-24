import React from "react";
import { LoginHeader } from "./LoginHeader";
import { LoginField } from "./LoginField";
import CKKLogo from "../../assets/logo3.png";

export const LoginForm = () => {
  return (
    <form className="container w-25">
      <LoginHeader
        img={CKKLogo}
        title="Habit Tracker"
        desc="Please login to access your habits"
      />
      <LoginField id="email-username" labelName="Email or Username" />
      <LoginField id="password" labelName="Password" />
      <button className="btn btn-primary btn-block">Login</button>
      <div className="text-center">
        <p>
          <a href="#">Dont have an account? Create one</a>
        </p>
        <p>
          <a href="#">Forgot Password?</a>
        </p>
      </div>
    </form>
  );
};
