import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
    viewItems(status) {
      const controller = this.controllerFor('items.index');

      if (status === 'keep') {
        this.transitionTo('items.index');
        controller.send('toggleItemView', status);
      } else if (status === 'discard') {
        this.transitionTo('items.index');
        controller.send('toggleItemView', status);
      } else {
        this.transitionTo('items.index');
        controller.send('toggleItemView', status);
      }
    },
  },
});
