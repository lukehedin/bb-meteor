import { Accounts } from 'meteor/accounts-base';
 
//Configures the accounts UI to use usernames instead of email addresses
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});