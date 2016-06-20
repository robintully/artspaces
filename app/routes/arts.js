import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('arts', {
      into: 'application',
      outlet: 'main'
    });
    this.render('art-nav', {
      into: 'application',
      outlet: 'pagenav'
    })
  },
  model(params) {
    return this.store.query('art', { page: {
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
  },
  hovered: false
});
