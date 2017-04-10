import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.Object.create({
    });
  },
  actions: {
    submit() {
      this.get('store').createRecord('post', {

          title: this.controller.get('model.title'),
          author: this.controller.get('model.author'),
          date: '',
          image: '',
          article: this.controller.get('model.article'),
          comments: [
          ]
        }).save();
      return this.transitionTo('home');
    }
  }
});
