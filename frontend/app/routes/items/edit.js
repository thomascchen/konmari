import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('item', params.item_id);
  },
  actions: {
    save(item) {
      var _this = this;
      item.save().then(function(item) {
        _this.transitionTo('items.show', item);
      });
    },
    cancel(item) {
      item.rollback();
      this.transitionTo('items.show', item);
    }
  }
});
