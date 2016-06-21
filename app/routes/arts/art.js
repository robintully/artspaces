import Ember from 'ember';

export default Ember.Route.extend({
   actions: {
     delete(resource) {
       resource.deleteRecord();
       resource.save();
       this.transitionTo('arts');
     }
   }
 });