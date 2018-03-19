import React, { Component } from 'react';

export default class FormInput extends Component {
	constructor(props) {
		super(props);
    }
    getValue(){
        return this.refs.input.value;
    }
	render() {
        var cls = "form-input " + (this.props.className || "");

        return (
            <div className="form-input">
                <div className="form-input-label">
                    {this.props.label}
                </div>
                <input ref="input" {...this.props} />
            </div>
        );
	}
}