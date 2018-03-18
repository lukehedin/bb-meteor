import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

export default class BaseAuthentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRegister: false
        };
    }
    componentWillReceiveProps(newProps){
        let isRegister = new URLSearchParams(newProps.location.search).get('type');

        this.setState({
            isRegister: isRegister === "register"
        });
    }
    render() {
        let form = this.state.isRegister
            ? <RegisterForm />
            : <LoginForm />

        return (
          <div className="content">
              {form}
          </div>
        );
    }
}