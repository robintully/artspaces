import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('art')
  },
    actions: {
    save: function(art) {
      var pleasework = this
      art.save().then(() => {
        this.redirect('art', this.transitionTo('arts'));
      }).catch((e) => {
        alert(e)
      })
    }
  }
});
