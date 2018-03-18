import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
        var cls = "button " + (this.props.className || "");

        return (
            <button className={cls} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
	}
}