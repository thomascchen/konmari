import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('links-list.hbs', 'Integration | Component | links list.hbs', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{links-list.hbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#links-list.hbs}}
      template block text
    {{/links-list.hbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
