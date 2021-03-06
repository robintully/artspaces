import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  sessionAccount: service('session-account'),

  beforeModel() {
    return this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  }

});
