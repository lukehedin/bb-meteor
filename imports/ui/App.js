import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { ApiTasks } from '../api/tasks.js';
import { DbBounty } from '../api/bounty.js';
import { ApiAuthentication } from '../api/authentication.js';

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

    //Use meteor to get user
    //LH unsure if this is safe
    let user = null; //Meteor.user();

    this.state = {
      hideCompleted: false,
      user: user || null,
      userLocation: this.getUserLocation()
    };
  }
  getUserLocation(){
    let userLocation = localStorage.getItem('userLocation');
    return userLocation 
      ? JSON.parse(userLocation) 
      : null; 
  }
  setUserLocation(place){
    if(place){
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
    } else{
      localStorage.removeItem('userLocation');

      this.setState({
        userLocation: null
      });
    }
  }
  applyBountyTimeData(){
    let now = new Date();
    let dateCreated = new Date(this.props.bounty.created);
    //TODO on bounty load 
  }
  applyBountyDistances(){
    //TODO on location change
  }
  applyBountyAvailibilities(){
    //TODO on user change
  }
  render() {
    //Required in order to pass onPlaceChange props
    const BaseWelcomeFn = (props) => {
      return this.getUserLocation()
        ? (<Redirect to="/results"/>)
        : (<BaseWelcome onPlaceChange={this.setUserLocation.bind(this)} {...props}/>)
    };

    const BaseResultsFn = (props) => {
      return this.getUserLocation()
        ? (<BaseResults bounty={this.props.bounty} {...props}/>)
        : (<Redirect to="/"/>)
    }

    const BaseBountyFn = (props) => {
      let bountyId = new URLSearchParams(props.location.search).get('bountyId');

      if(!bountyId) return (<Redirect to="/"/>);

      let bounty = this.props.bounty.find(b => {
        return b._id._str === bountyId;
      });

      return bounty
        ? (<BaseBounty bounty={bounty} currentUser={this.props.currentUser} {...props}/>)
        : (<Redirect to="/"/>)
    }

    return (
      <div className="container">
        <Router>
          <div className="container-content">
            <AppHeader onPlaceChange={this.setUserLocation.bind(this)} currentLocation={this.getUserLocation()} currentUser={this.props.currentUser}/>
            <div className="scroll-content">
              <Route exact path="/" render={BaseWelcomeFn} />
              <Route path="/welcome" component={BaseWelcomeFn} />
              <Route path="/results" component={BaseResultsFn} />
              <Route path="/bounty" component={BaseBountyFn} />
              <Route path="/authentication" component={BaseAuthentication} />
              <AppFooter />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('bounty');

  return {
    bounty: DbBounty.find({}).fetch()
  };
})(App);