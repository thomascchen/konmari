import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('items', { path: '/' }, function() {
  // });
  this.route('items', function() {
    this.route('new');
    this.route('show', { path: ':item_id' });
  });
});

export default Router;
