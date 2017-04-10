import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('post',  params.post_id );
  },
  actions: {
    submit() {
      const comment =
        {
          author: 'Anonymous',
          image: 'http://placehold.it/64x64',
          date: 'August 31, 2013 at 13:00 PM',
          text: this.controller.get('text')
        };

      let comments = Array.from(this.controller.get('model.comments'));

      comments.push(comment);

      this.controller.get('model').set('comments', comments);
      this.controller.get('model').save();
    }
  }
});
