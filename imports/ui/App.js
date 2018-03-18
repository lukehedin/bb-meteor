import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import { Bounty } from '../api/bounty.js';

import AppHeader from '../ui/AppHeader/AppHeader';
import AppFooter from '../ui/AppFooter/AppFooter';
import BaseWelcome from '../ui/Welcome/BaseWelcome';
import BaseResults from '../ui/Results/BaseResults';
import BaseBounty from '../ui/Bounty/BaseBounty';
import BaseAuthentication from '../ui/Authentication/BaseAuthentication';
 
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    //Check localstorage for userLocaton
    let userLocation = localStorage.getItem('userLocation');
    //Use meteor to get user
    let user = Meteor.user();

    this.state = {
      hideCompleted: false,
      user: user || null,
      userLocation: userLocation 
        ? JSON.parse(userLocation) 
        : null
    };
  }
  setUserLocation(place){
    let userLocation = {
      placeId: place.place_id,
      name: place.name,
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng()
    };

    localStorage.setItem('userLocation', JSON.stringify(userLocation));

    this.setState({
      userLocation: userLocation
    });
  }
  handleSubmit(e) {
    // e.preventDefault();
 
    // // Find the text field via the React ref
    // const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    // Meteor.call('tasks.insert', text);
 
    // // Clear form
    // ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  render() {
    //Required in order to pass onPlaceChange props
    const BaseWelcomeFn = (props) => {
      return this.state.userLocation 
        ? (<Redirect to="/results"/>)
        : (<BaseWelcome onPlaceChange={this.setUserLocation.bind(this)} {...props}/>)
    };

    const BaseResultsFn = (props) => {
      return this.state.userLocation
        ? (<BaseResults bounty={this.props.bounty} {...props}/>)
        : (<Redirect to="/"/>)
    }

    return (
      <div className="container">
        <Router>
          <div>
            <AppHeader onPlaceChange={this.setUserLocation.bind(this)} currentLocation={this.state.userLocation} currentUser={this.props.currentUser}/>
            <Route exact path="/" render={BaseWelcomeFn} />
            <Route path="/results" component={BaseResultsFn} />
            <Route path="/bounty" component={BaseBounty} />
            <Route path="/authentication" component={BaseAuthentication} />
            <AppFooter />
          </div>
        </Router>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('bounty');

  return {
    bounty: Bounty.find({}).fetch()
  };
})(App);