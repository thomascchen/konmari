import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('item', { keep: true }, function(item) {
      return item.get('keep');
    });
  },
  renderTemplate: function(controller, model) {
    this.render('items.index', {
      model: model
    });
  }
});
