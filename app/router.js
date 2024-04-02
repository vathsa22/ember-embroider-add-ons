import EmberRouter from '@embroider/router';
import config from 'ember-embroider-add-ons/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('new');
});
