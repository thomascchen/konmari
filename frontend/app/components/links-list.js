import Ember from 'ember';

export default Ember.Component.extend({
  viewAllItems: function() {
    this.sendAction('action', 'all');
  },
  viewKeepItems: function() {
    this.sendAction('action', 'keep');
  },
  viewDiscardItems: function() {
    this.sendAction('action', 'discard');
  }
});
