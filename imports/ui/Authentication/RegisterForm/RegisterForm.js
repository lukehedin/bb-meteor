import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import { Meteor } from 'meteor/meteor'

export default class LoginForm extends Component {
  constructor(props) {
        super(props);

        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onSubmitForm(e){
        e.preventDefault();

        var username = this.refs.username.value;
        var password = this.refs.password.value;
        var confpassword = this.refs.confpassword.value;
        var dob = this.refs.dob.value;
        var email = this.refs.email.value;

        if(password !== confpassword){
            alert('Passwords do not match!');
            return;
        }

        Meteor.call('authentication.register', username, password, email, dob);

        debugger;
    }
    render() {
        return (
        <form className="login-form" onSubmit={this.onSubmitForm.bind(this)}>
            <input required ref="username" type="text" placeholder="Enter username" />
            <input required ref="password" type="password" placeholder="Enter password" />
            <input required ref="confpassword" type="password" placeholder="Confirm password" />
            {/* <input required ref="dob" type="text" placeholder="Date of Birth" /> */}
            <input required ref="email" type="email" placeholder="Email" />
            <Button text="Log In" onClick={this.onSubmitForm.bind(this)}/>
            <div className="auth-switch-msg">
            <div>
                Already have an account?
            </div>
            <Link to="/authentication">
                Login here
            </Link>
            </div>
        </form>
        );
    }
}