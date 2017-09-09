/**
 * External dependencies
 */
const test = require('ava')

/**
 * Internal dependencies
 */
const freeze = require('./index')

test('freeze object recursively', t => {
  const initial = { additional: 1, some: [1, 2, 3], prop: { recursive: true, deep: { very: 'much' } } }
  const frozen = freeze(initial)

  t.deepEqual(initial, frozen)
  t.false(Object.isFrozen(initial))
  t.true(Object.isFrozen(frozen))
  t.true(Object.isFrozen(frozen.some))
  t.true(Object.isFrozen(frozen.prop))
  t.true(Object.isFrozen(frozen.prop.recursive))
  t.true(Object.isFrozen(frozen.prop.deep))
})
