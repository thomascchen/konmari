import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('item', { keep: false }, function(item) {
      return !item.get('keep');
    });
  }
});
