import Ember from 'ember';

export default Ember.Component.extend({
  hovered: false,
  mouseEnter() {
    this.set('hovered', true)
  },
  mouseLeave() {
    this.set('hovered', false)
  }
});
