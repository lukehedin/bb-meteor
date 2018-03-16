import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class BaseBounty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }

    render() {
        return (
          <div>
            Bounty
          </div>
        );
    }
}