import Ember from 'ember';

export default Ember.Controller.extend({
  sessionAccount: Ember.inject.service(),

  actions: {
    update: function(art) {
      art.save().catch((e) => {
          alert(e);
      });
    }
  }
});
