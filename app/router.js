import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('contact');
  this.route('about');
  this.route('post', {path: '/post/:post_id'}, function () {
    this.route('create');
  });
  // this.route('create');
});

export default Router;
