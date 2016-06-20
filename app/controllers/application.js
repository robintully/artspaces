import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service(),

  actions: {
    authenticate: function(credentials) {
      var authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).then(() => {
        transitionTo('application')
      }).catch((reason)=>{
        this.set('errorMessage', reason.responseJSON.errors || reason);
      });
    },
    save(user){
      user.save().then(()=>{
        var credentials = {identification: user.get('email'), password: user.get('password')},
          authenticator = 'authenticator:jwt';

        this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
          this.set('errorMessage', reason.error || reason);
        });
      }).catch((adapterError) => {
        if (adapterError.errors) {
          this.set('errorMessage', adapterError.errors)
        }
      })
    }
  }
});
