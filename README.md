# functional-freeze
Freeze an object without changing the original argument.

## Usage
```
const freeze = require('functional-freeze')

const initial = { some: true }
const frozen = freeze(initial)

frozen.some = false
frozen.nonExisting = 123

console.log(frozen.some === true)
console.log(frozen.nonExisting === undefined)
```

## Methods

`const freeze = require('functional-freeze')`

### freeze(someObject)

Calls `Object.freeze` recursively without changing the original object.

## License

MIT

## Contributors

- Joseph Callaars <joseph@callaa.rs>


