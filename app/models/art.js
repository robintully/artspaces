import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  img_link: attr('string'),
  user: belongsTo('user'),
  spaces: hasMany('space')
});
