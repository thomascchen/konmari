import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | items/keep', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:items/keep');
    assert.ok(route);
  });
});
