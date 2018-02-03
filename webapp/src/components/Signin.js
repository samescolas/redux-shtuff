import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmailForm from './forms/EmailForm';
import PasswordForm from './forms/PasswordForm';

class Signin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password : '',
	  error: '',
      format : /^[-a-z0-9_+.]+@([-a-z0-9_+.])+\.[a-z0-9]{2,63}$/i
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  componentDidMount() {
    let inputBox = document.getElementById("emailInput");
    if (inputBox)
      inputBox.focus();
  }

  handleChange(event) {
    if (event.target.type === 'password') {
      this.setState({ 'password' : event.target.value, 'error': '' });
    } else if (event.target.type === 'email') {
      this.setState({ 'email' : event.target.value, 'error': '' });
    }
  }

  sendData(event) {
    event.preventDefault();
    if (this.state.format.test(this.state.email) && this.state.password.length > 8) { // Test using RFC standard email regex (above)
    fetch('https://api.invoicehome.com/api/v1/signin',{
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({ user:{ email:this.state.email, password:this.state.password }})
      })
      .then(response=>{
        if(response.ok) {
            return response.json()
        } else if (response.status === 404) {
			this.setState({
				error: 'Email address does not exist.',
				password: ''
			});
		} else if (response.status === 401) {
			this.setState({
				error: 'Incorrect password.',
				password: ''
			});
		}
        else {
            let errorMessage = `${response.status}, (${response.statusText})`;
           	throw(new Error(errorMessage));
        }
      })
      .then((response) => { localStorage.setItem("invoiceHomeToken", response.token) })
	  .then(() => { this.props.history.push('invoices'); })
	  .catch((err) => console.log("Error: " , err))
    }
  }


  render() {
    let message = "Don't have an account yet? No worries,"
    return (
      <div>
      <form onSubmit={this.sendData}>
        <h1>Invoice Home Sign In</h1>
        <p>E-mail</p>
        <br />
        <EmailForm
          id="emailInput"
          onChange={this.handleChange}
        />
        <br />
        <p>Password</p>
        <PasswordForm
          onChange={this.handleChange}
        />
        <br />
		<p hidden={this.state.error === ''}>{this.state.error}</p>
        <input type="submit" value="Signin" />
      </form>
      <p>{message} <Link to='/signup'>joining is easy</Link>.</p>

      </div>
    )
  }
}

export default Signin;
