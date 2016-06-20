import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('spaces', {
      into: 'application',
      outlet: 'main'
    });
    this.render('space-nav', {
      into: 'application',
      outlet: 'pagenav'
    })
  },
  model(params) {
    return this.store.query('space', { page: {
      number: params.page,
      size: params.size
    }
    }) 
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }
});
