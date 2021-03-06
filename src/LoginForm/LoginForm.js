import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./LoginForm.css";
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({
      email: "",
      password: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.getUserData(this.state.email, this.state.password);
    this.resetForm();
  };

  render() {

    const { email, password } = this.state;
    
    return (
      <main className="Login">
        <h1>Login Page</h1>
        <form aria-label="login-form">
          <input
            aria-label="enter-email-address"
            type="text"
            name="email"
            value={email}
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            aria-label="enter-password"
            type="text"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <button aria-label="submit" onClick={this.handleSubmit} type="submit">Submit</button>
        </form>
        <NavLink to="/" className="home">
          <h3 aria-label="home">HOME</h3>
        </NavLink>
      </main>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  loggedInUserData: PropTypes.object,
  getUserData: PropTypes.func 
}
