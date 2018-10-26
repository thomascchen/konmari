import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { alias, equal } from '@ember/object/computed';

export default Controller.extend({
  first: alias('model.lastObject'),
  filteredList: computed('model', 'status', function() {
    const model = get(this, 'model');
    const status = get(this, 'status');

    if (status === 'keep') {
      return model.filterBy('keep', true);
    } else if (status === 'discard') {
      return model.filterBy('keep', false);
    } else {
      return model;
    }
  }),
  status: 'all',
  keepItems: equal('status', 'keep'),
  discardItems: equal('status', 'discard'),
  resultsItems: equal('status', 'results'),

  itemsToKeep: computed('model', function() {
    const model = get(this, 'model');
    return model.filterBy('keep', true);
  }),

  itemsToDiscard: computed('model', function() {
    const model = get(this, 'model');
    return model.filterBy('keep', false);
  }),

  actions: {
    toggleItemView(status) {
      set(this, 'status', status);
    },
  },
});
