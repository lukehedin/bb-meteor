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
		return (
            <header className="app-header">
                <div className="content">
                    <Link className="header-logo" to='/'>
                        <img src="img/bb_flag.svg" alt="" />
                        <h1>Birthday Bounty</h1>
                    </Link>
                    <div className="header-user">
                        {false ?
                            <div className="user-details">

                            </div> :
                            <div className="user-buttons">
                                <Button className="light-button" linkTo="/authentication" text="Log In"/>
                                <Button className="dark-button" linkTo="/signup" text="Sign Up"/>
                            </div>
                        }
                    </div>
                </div>
                <nav className="app-subheader moving-background">
                    <div className="location-info content">
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
                </nav>
            </header>
		);
	}
}