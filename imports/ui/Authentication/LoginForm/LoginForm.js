import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onSubmitForm(e){
    e.preventDefault();

  }
	handleLoginClick() {
    var username = this.refs.username.value;
    var password = this.refs.password.value;

    // Util.post("/api/login", { 
    //   username: username,
    //   password: password
    // }, {
    //   success: function(result) {
    //     //If successful, store JWT in localStorage
    //     localStorage.setItem('bb-jwt', result.token);
  
    //     console.log(result);
    //   }
    // });
	}
  render() {
    return (
      <form onSubmit={this.onSubmitForm.bind(this)} className="login-form">
        <input ref="username" type="text" placeholder="Enter username" />
        <input ref="password" type="password" placeholder="Enter password" />
        <Button text="Log In" onClick={this.handleLoginClick}/>
      </form>
    );
  }
}