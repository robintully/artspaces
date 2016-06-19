import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  arts: hasMany('art'),
  spaces: hasMany('space'),
  user: belongsTo('user')
});
