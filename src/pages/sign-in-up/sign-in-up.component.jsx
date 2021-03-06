import React from "react";
import "./sign-in-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndUp = () => {
  return (
    <main className="sign-in-up">
      <div className="container">
        <h1 className="page-title">Sign In or Register</h1>
        <div className="form-group">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </main>
  );
};

export default SignInAndUp;
