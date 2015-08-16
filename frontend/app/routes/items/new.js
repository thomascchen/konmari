import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('item');
  },
  actions: {
    save(item) {
      const _this = this;
      item.save().then(function(item) {
        _this.transitionTo('items.show', item);
      });
    },
    cancel(item) {
      item.rollback();
      this.transitionTo('items.index');
    }
  }
});
