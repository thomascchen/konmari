import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('item', params.item_id);
  },
  actions: {
    keep(item) {
      var _this = this;
      var nextItemId = +item.id + 1;
      const itemsCount = this.store.peekAll('item').get('length');
      item.set('keep', true);
      item.save();
      if (+item.id < itemsCount) {
        _this.transitionTo('items.show', nextItemId);
      } else {
        _this.transitionTo('items.index');
      };
    },
    discard(item) {
      var _this = this;
      var nextItemId = +item.id + 1;
      const itemsCount = this.store.peekAll('item').get('length');
      item.set('keep', false);
      item.save();
      if (+item.id < itemsCount) {
        _this.transitionTo('items.show', nextItemId);
      } else {
        _this.transitionTo('items.index');
      };
    }
  }
});
