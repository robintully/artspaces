import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome');
  this.route('spaces');
  this.route('arts', function() {
    this.route('art', {
      path: ':art_id'
    });
  })
  this.route('users', function() {
    this.route('user', {
      path: ':user_id'
    });
  });
  this.route('profile');
  this.route('new-art');
  this.route('showart', function() {
    this.route('art', {
      path: ':art_id'
    });
  });

 
});

export default Router;
