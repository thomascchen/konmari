import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('item', params.item_id);
  },
});
