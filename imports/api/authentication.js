import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

//And here are the things that are essentially POST endpoints! Neat.
Meteor.methods({
  'authentication.register'(username, password, email) {
    //TODO
    check(username, String);
    check(email, String);
    check(password, String);
 
    // Make sure the user is NOT logged in before registering new user
    if (this.userId) {
        //LH: Usnsure about this error string thing
      throw new Meteor.Error('already-logged-in');
    }
 
    Accounts.createUser({
        username: username, 
        password: password,
        email: email
    }, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('LH - USER REGISTERED: ' + username);
        }
    });
  },
});