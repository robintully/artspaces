import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome');
  this.route('spaces');
  this.route('arts')
  this.route('users', function() {
    this.route('user', {
      path: ':user_id'
    });
  });
  this.route('profile');
});

export default Router;
