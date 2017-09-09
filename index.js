'use strict'

function canFreeze (frozen, prop) {
  return frozen.hasOwnProperty(prop) && typeof frozen[prop] === 'object' &&
    !Object.isFrozen(frozen[prop])
}

module.exports = function freezeRecursively (target) {
  // Copy the object, instead of modifying the original
  let frozen = Array.isArray(target) ? target.slice(0) : Object.assign({}, target)

  Object.getOwnPropertyNames(frozen).forEach(prop => {
    if (canFreeze(frozen, prop)) frozen[prop] = freezeRecursively(frozen[prop])
  })

  return Object.freeze(frozen)
}
