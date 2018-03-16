import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class BaseAuthentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }

    render() {
        return (
          <div>
            Authentication
          </div>
        );
    }
}