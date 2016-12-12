# redux-state-machine [![Travis](https://img.shields.io/travis/realb0t/redux-state-machine.svg?style=flat-square)](https://github.com/realb0t/redux-state-machine) [![npm](https://img.shields.io/npm/v/redux-state-machine.svg?style=flat-square)](https://www.npmjs.com/package/redux-state-machine) [![David](https://img.shields.io/david/realb0t/redux-state-machine.svg?style=flat-square)](https://www.npmjs.com/package/redux-state-machine) [![ES6](https://img.shields.io/badge/source-es6-green.svg?style=flat-square)](http://es6-features.org/#Constants)

Implementation [javascript-state-machine](http://github.com/jakesgordon/javascript-state-machine) to __[Redux](http://redux.js.org)__ as __Reducer__.

Redux Action is Event for FSM. It changing FSM `state.status`
and remember in `state.event`.

This library is intended to describe meta information of discrete state process.
For example steps of fetching resources which has state:

```
INIT -> LOADING -> SUCCESS or FAILURE
```

Default `state.status` is `INIT`.

Features:
* Parallel and Nested states
* Recognizable API (a-lia `javascript-state-machine`)
* Encapsulate Payload
* Easy state check (by the key)

## Install

```
npm install redux-state-machine --save
```

## Usage

Describe reducer (ES6):
```javascript
import reducerBuilder from 'redux-state-machine';

const reducer = reducerBuilder({
  events: [
    { name: 'LOAD', from: 'INIT', to: 'LOADING' },
    { name: 'SUCCESS', from: 'LOADING', to: 'LOADING_SUCCESS' },
    { name: 'FAILURE', from: 'LOADING', to: 'LOADING_FAILURE' }
  ]
});
```

Describe reducer (ES5):
```javascript
var reducerBuilder = require('redux-state-machine');
var reducer = reducerBuilder.default({ /* ... */ });
```

Initial reducer state is
```javascript
  {
    status: 'INIT', // Current status (state name)
    action: null,   // Last action (event for FSM)
    error: null,    // If last transition firth error
    INIT: true      // Helper-field for quick check status
  }
```


After dispatch action `LOAD` from `INIT` state, reducer state is
```javascript
  {
    status: 'LOADING',
    action: { type: 'LOAD' /* ... */ },
    error: null,
    LOADING: true
  }
```

After dispatch action `SUCCESS` from `LOADING` state, reducer state is
```javascript
  {
    status: 'LOADING_SUCCESS',
    action: { type: 'SUCCESS' /* ... */ },
    error: null,
    LOADING_SUCCESS: true
  }
```

After dispatch action `FAILURE` from `LOADING` state, reducer state is
```javascript
  {
    status: 'LOADING_FAILURE',
    action: { type: 'FAILURE' /* ... */ },
    error: null,
    LOADING_FAILURE: true
  }
```

After dispatch action `LOAD` from `LOADING_SUCCESS` state __(error case)__ reducer state is
```javascript
  {
    status: 'LOADING_SUCCESS',
    action: { type: 'LOAD' /* ... */ },
    error: true,
    LOADING_SUCCESS: true
  }
```
