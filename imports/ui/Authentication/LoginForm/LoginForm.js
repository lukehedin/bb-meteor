import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '../../Button/Button';
import { Meteor } from 'meteor/meteor'

class LoginForm extends Component {
  constructor(props) {
    super(props);

		this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onSubmitForm(e){
    e.preventDefault();

    var username = this.refs.username.value;
    var password = this.refs.password.value;

    Meteor.loginWithPassword(username, password, (err) => {
      if(err){
        alert(err.reason);
      } else {
        this.props.history.push('/results');
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm.bind(this)} className="login-form">
        <input ref="username" type="text" placeholder="Enter username" />
        <input ref="password" type="password" placeholder="Enter password" />
        <Button text="Log In" onClick={this.onSubmitForm.bind(this)}/>
        <div className="auth-switch-msg">
          <div>
            Don't have an account?
          </div>
          <Link to="/authentication?type=register">
            Register here
          </Link>
        </div>
      </form>
    );
  }
}

//Used to allow history push
export default withRouter(LoginForm);