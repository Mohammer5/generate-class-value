# Generate Class Value

This package purpose's is to reduce the complexity of creating
dynamic class names. It's been used in a react environment so far
but works in any other environment as well.

## Usage

The following example demonstrates the use case within a react environment with TypeScript.
Of course it works in plain JavaScript as well.

```js
import * as React from 'react';
import { SFC } from 'react';
import { partial } from 'lodash/fp';
import { generateClassValue } from 'generate-class-value';

interface Props {
  color: string;
}

const conditions: Conditions<Props> = {
  'box__header': true,
  'box__header--green': ({ color }) => color === 'green',
  'box__header--black': ({ color }) => color === 'black',
};

// Reduces the cognitive load when reading the jsx code
const lazyClassValue = generateClassValue(conditions);

/**
 * <Box color="green" />
 *
 * will produce:
 *
 * <div class="box__header box__header--green"></div>
 **/
export const Box: SCF<Props> = props => (
  <div className={lazyClassValue(props)}>
    {/* ... */}
  </div>
);
```
