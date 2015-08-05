import Ember from 'ember';

export default Ember.Controller.extend({
  first: Ember.computed.alias('model.lastObject'),
  filteredList: Ember.computed('model', 'status', function() {
    var model = this.get('model');
    var status = this.get('status');

    if (status === "keep") {
      return model.filterBy("keep", true);
    } else if (status === "discard") {
      return model.filterBy("keep", false);
    } else {
      return model;
    }
  }),
  status: "all",
  keepItems: Ember.computed.equal('status', 'keep'),
  discardItems: Ember.computed.equal('status', 'discard'),
  actions: {
    toggleItemView(status) {
      this.set("status", status);
    }
  }
});
