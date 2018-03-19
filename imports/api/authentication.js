import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

//And here are the things that are essentially POST endpoints! Neat.
Meteor.methods({
  'authentication.register'(registerData) {

    // The UI shouldn't allow this to happen, but if it does, error
    if (this.userId) throw new Meteor.Error('already-logged-in');
    
    check(registerData.username, String);
    check(registerData.email, String);
    check(registerData.password, String);
 
    let emailExists = Meteor.users.find({
        "emails.address": registerData.email
    }, { limit: 1 }).count() > 0;

    if(emailExists) throw new Meteor.Error('email-in-use');

    let userExists = Meteor.users.find({
        "username": registerData.username
    }, { limit: 1 }).count() > 0;

    if(userExists) throw new Meteor.Error('username-in-use');

    Accounts.createUser({
        username: registerData.username, 
        password: registerData.password,
        email: registerData.email
    });
  },
});