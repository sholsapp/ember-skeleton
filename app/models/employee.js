import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr(),
  last: DS.attr(),
  position: DS.attr(),
  salary: DS.attr(),
});
