import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  password: attr('string'),
  passwordConfirmation: attr('string'),
  arts: hasMany('art'),
  spaces: hasMany('space')
});
