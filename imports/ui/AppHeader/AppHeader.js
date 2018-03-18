import React, { Component } from 'react';
import Button from '../Button/Button';
import LocationSearch from "../LocationSearch/LocationSearch";
import { Link } from 'react-router-dom';

export default class AppHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			birthdayFact: {
				title: 'Birthday fact:',
				details: 'On your birthday, 29 September, Alfred Hitchcock was born! Perhaps a film career is in store for you?'
			}
		};
    }
	render() {
        let subHeader = this.props.currentLocation
            ? (<div className="app-subheader moving-background">
                    <div className="lower-header content">
                        <LocationSearch onPlaceChange={this.props.onPlaceChange} showSearchButton={false} currentLocation={this.props.currentLocation} />
                        <div className="spacer"></div>
                        <div className="birthday-facts">
                            <div className="title">
                                {this.state.birthdayFact.title}
                            </div>
                            <div>
                                {this.state.birthdayFact.details}
                            </div>
                        </div>
                    </div>
                </div>)
            : null;

		return (
            <header className="app-header">
                <div className="upper-header content">
                    <Link className="header-logo" to='/'>
                        <img src="img/bb_flag.svg" alt="" />
                        <h1>Birthday Bounty</h1>
                    </Link>
                    <div className="header-user">
                        {false ?
                            <div className="user-details">

                            </div> :
                            <div className="user-buttons">
                                <Link to="/authentication">
                                    <Button className="light-button" text="Log In"/>
                                </Link>
                                <Link to={{ pathname: '/authentication', search: '?type=register' }}>
                                    <Button className="dark-button" text="Sign Up"/>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
                {subHeader}
            </header>
		);
	}
}