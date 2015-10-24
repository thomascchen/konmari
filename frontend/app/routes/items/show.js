import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('item', params.item_id);
  },
  actions: {
    classifyItem(item, value) {
      const _this = this;
      const nextItemId = +item.id + 1;
      const itemsCount = this.store.peekAll('item').get('length');
      item.set('keep', value);
      item.save();
      if (+item.id < itemsCount) {
        _this.transitionTo('items.show', nextItemId);
      } else {
        _this.transitionTo('items.index').then(function(items) {
          const controller = items.controllerFor('items.index');
          controller.send('toggleItemView', 'results');
        });
      }
    }
  }
});
