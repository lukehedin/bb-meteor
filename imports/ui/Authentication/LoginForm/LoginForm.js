import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import FormInput from '../../FormInput/FormInput';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        formError: null
    };
  }
  validateForm(formData){
    let errorMsg = null;

    switch(true){
        case (!formData.username):
            errorMsg = "Please provide a username.";
            break;
        case (!formData.password):
            errorMsg = "Please provide a password.";
            break;
        default:
            break;
    }

    if(errorMsg){
        this.setState({
            formError: errorMsg
        });
    }

    return !errorMsg;
  }
  onSubmitForm(e){
    e.preventDefault();

    let formData = {
      username: this.refs.username.getValue(),
      password : this.refs.password.getValue()
    };

    let isValid = this.validateForm(formData);
    if(!isValid) return;

    Meteor.loginWithPassword(formData.username, formData.password, (err) => {
      if(err){
          this.setState({
              formError: 'Incorrect username or password.'
          });
      } else{
          this.props.onAuthenticated();
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm.bind(this)} className="login-form">
        <FormInput ref="username" type="text" label="Username" />
        <FormInput ref="password" type="password" label="Password" />
        <div className="form-error">{this.state.formError}</div>
        <Button text="Log In" type="submit" />
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