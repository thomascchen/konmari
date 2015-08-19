import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    viewAllItems() {
      const controller = this.controllerFor('items.index');
      this.transitionToRoute('items.index');
      controller.send('toggleItemView', 'all');
    },
    viewKeepItems() {
      const controller = this.controllerFor('items.index');
      this.transitionToRoute('items.index');
      controller.send('toggleItemView', 'keep');
    },
    viewDiscardItems() {
      const controller = this.controllerFor('items.index');
      this.transitionToRoute('items.index');
      controller.send('toggleItemView', 'discard');
    }
  }
});
