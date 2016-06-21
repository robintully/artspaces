import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },
    submit: function() {
      this.toggleProperty('isEditing');
      this.attrs.saveChanges(this.get('art'));
    }
  }
});
