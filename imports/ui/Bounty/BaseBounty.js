import React, { Component } from 'react';

export default class BaseBounty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }

    render() {
        return (
          <div className="content">
            Bounty
          </div>
        );
    }
}