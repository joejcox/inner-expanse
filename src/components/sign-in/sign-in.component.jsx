import React, { Component } from "react";
import FormInput from "../form-elements/form-input.component";
import FormButton from "../form-elements/form-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <section className="sign-in form-group--area">
        <div className="area-container">
          <div className="title-subtitle">
            <h2 className="title">I already have an account</h2>
            <span className="subtitle">
              Sign in with your account credentials below
            </span>
          </div>
          <form onSubmit={(e) => this.handleSubmit(e)} className="form">
            <FormInput
              handleChange={(e) => this.handleChange(e)}
              label="Email"
              name="email"
              type="email"
              value={this.state.email}
            />

            <FormInput
              handleChange={(e) => this.handleChange(e)}
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
            />

            <FormButton type="submit" name="submit">
              Sign In
            </FormButton>
            <FormButton classes="google-button" onClick={signInWithGoogle}>
              <i className="fab fa-google"></i> Sign in with Google
            </FormButton>
          </form>
        </div>
      </section>
    );
  }
}
