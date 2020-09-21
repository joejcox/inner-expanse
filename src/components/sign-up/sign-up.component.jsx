import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FormInput from "../form-elements/form-input.component";
import FormButton from "../form-elements/form-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(`Error: ${error.message}`);
      alert(error.message);
    }

    const { history } = this.props;
    history.push("/");
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <section className="sign-up form-group--area">
        <div className="area-container">
          <div className="title-subtitle">
            <h2 className="title">I do not have an account</h2>
            <span className="subtitle">
              Sign up with your email and password.
            </span>
          </div>
          <form onSubmit={(e) => this.handleSubmit(e)} className="form">
            <FormInput
              handleChange={(e) => this.handleChange(e)}
              label="Display Name"
              name="displayName"
              type="text"
              value={displayName}
            />

            <FormInput
              handleChange={(e) => this.handleChange(e)}
              label="Email"
              name="email"
              type="email"
              value={email}
            />

            <FormInput
              handleChange={(e) => this.handleChange(e)}
              label="Password"
              name="password"
              type="password"
              value={password}
            />

            <FormInput
              handleChange={(e) => this.handleChange(e)}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
            />

            <FormButton type="submit" name="signUpSubmit" classes="margins">
              Sign Up
            </FormButton>
          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(SignUp);
