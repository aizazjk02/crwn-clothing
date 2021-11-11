import { Component } from "react";
import { FormInput } from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { CustomButton } from "../custom-button/custom-button.component"
export class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "aizazkotwal02@gmail.com",
      password: "1234",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit" >Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
