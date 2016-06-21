import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('space')
  },
    actions: {
    save: function(space) {
      space.save().then(() => {
        this.redirect('space', this.transitionTo('spaces'));
      }).catch((e) => {
        alert(e)
      })
    }
  }
});
