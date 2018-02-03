import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmailForm from './forms/EmailForm';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      format : /^[-a-z0-9_+.]+@([-a-z0-9_+.])+\.[a-z0-9]{2,63}$/i,
      duplicate: false
    }
  }

  componentDidMount() {
    console.log(this.props)
	if (localStorage.getItem("invoiceHomeToken") !== null) {
		// this.props.history.push("/invoices"); What is this?
		// Flash you are already signed in
	} else {
  		let inputBox = document.getElementById("emailInput");
    	if (inputBox) {
      		inputBox.focus();
		}
	}
  }

  handleChange(event) {
    this.setState({ 'email' : event.target.value, 'duplicate': false });
  }

  sendData(event) {
    event.preventDefault();
    if (!this.state.duplicate && this.state.format.test(this.state.email)) {
      fetch('https://api.invoicehome.com/api/v1/signup', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ user: { email: this.state.email } })
      })
      .then(response=>{
        if(response.ok) {
          return response;
        }
        else if (response.status === 409) {
          this.setState({ 'duplicate': true })
          throw new Error("email already exists")
        } else {
          let errorMessage = `${response.status}, (${response.statusText})`;
          throw new Error(errorMessage)
        }
      })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem("invoiceHomeToken", response.token)
		window.location.replace("invoices");
      })
      .catch(error => console.log(`Error in fetch: ${ error.message }`) )
    }
  }

  render() {
    return (
      <form onSubmit={this.sendData.bind(this)}>
        <div>
          <h1>Free Plan Sign Up</h1>
          <h4>Sign up for free and create beautiful PDF invoices in minutes.</h4>
          <p><strong>Please enter your email address below</strong></p>
        </div>
        <EmailForm
          id="emailInput"
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <input type="submit" value="Signup" />
        <p>Have an account already? <Link to="/signin">Sign in here</Link>.</p>
        <p hidden={!this.state.duplicate}>Email already exists.</p>
        <br />
      </form>
    )
  }
}

export default Signup;
