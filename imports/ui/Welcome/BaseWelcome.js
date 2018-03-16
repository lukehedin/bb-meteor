import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import LocationSearch from "../LocationSearch/LocationSearch";

export default class BaseWelcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }

    render() {
        return (
			<div className="welcome-panel moving-background">
				<div className="location-info content">
					<LocationSearch showSearchButton={true} onPlaceChange={this.props.onPlaceChange} />
				</div>
			</div>
        );
    }
}