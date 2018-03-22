import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

const init = () => {
  console.log(Meteor.settings);

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: Meteor.settings.private.fbAppId,
        loginStyle: 'popup',
        secret: Meteor.settings.private.fbSecretKey
      }
    }
  );
}

export default init;