import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(item) {
      var _this = this;
      item.save().then(function(item) {
        _this.transitionTo('items.show', item);
      });
    },
    cancel() {
      var itemId = this.currentModel.id
      this.transitionTo('items.show', itemId);
    }
  }
});
