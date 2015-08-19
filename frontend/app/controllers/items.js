import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    viewItems(status) {
      const controller = this.controllerFor('items.index');

      if (status === "keep") {
        this.transitionToRoute('items.index');
        controller.send('toggleItemView', status);
      } else if (status === "discard") {
        this.transitionToRoute('items.index');
        controller.send('toggleItemView', status);
      } else {
        this.transitionToRoute('items.index');
        controller.send('toggleItemView', status);
      }
    }
  }
});
