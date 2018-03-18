import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

export default class BaseAuthentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRegister: this.getIsRegister(this.props)
        };
    }
    componentWillReceiveProps(newProps){
        this.setState({
            isRegister: this.getIsRegister(newProps)
        });
    }
    getIsRegister(props){
        let regParam = new URLSearchParams(props.location.search).get('type');
        return regParam === "register";
    }
    render() {
        let form = this.state.isRegister
            ? <RegisterForm />
            : <LoginForm />

        return (
          <div className="authentication-container content">
              {form}
          </div>
        );
    }
}