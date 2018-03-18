import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const DbBounty = new Mongo.Collection('bounty');

if (Meteor.isServer) {
    // This code only runs on the server
    // It registers a publication named "bounty", which can be accessed by Meteor.subscribe on the client (see App.js)
    Meteor.publish('bounty', function bountyPublication() {
      // Only publish tasks that are public or belong to the current user
      return DbBounty.find({});
    });
  }