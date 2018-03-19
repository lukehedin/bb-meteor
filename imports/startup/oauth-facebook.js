import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

const init = () => {
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: Meteor.settings.fbAppId,
        loginStyle: 'popup',
        secret: Meteor.settings.fbSecretKey
      }
    }
  );
}

export default init;