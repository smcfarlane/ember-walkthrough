import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movies', {}, function() {
    this.route('show', {});
    this.route('new', {});
    this.route('edit', {});
  });
});

export default Router;
