import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  article: DS.attr(),
  comments: DS.attr()
});
