import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('arts', {
      into: 'application'
    })
  },
  model() {
    return this.store.findAll('art') 
  },
  hovered: false
});
