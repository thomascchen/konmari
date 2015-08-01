import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('item');
  },
  actions: {
    save(item) {
      var _this = this;
      item.save().then(function(item) {
        _this.transitionTo('items.show', item);
      });
    }
  }
});
