import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('items', { path: '/' }, function() {
    this.route('show', { path: ':item_id' });
    this.route('new');
    this.route('edit', { path: ':item_id/edit' });
    this.route('keep');
    this.route('discard');
  });
});

export default Router;
