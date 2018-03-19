import '../imports/api/tasks.js';
import '../imports/api/bounty.js';
import '../imports/api/authentication.js';

import { Meteor } from 'meteor/meteor';
import FacebookOAuthInit from '../imports/startup/oauth-facebook'; 

Meteor.startup(() => {
    //Facebook service config
    FacebookOAuthInit();
});