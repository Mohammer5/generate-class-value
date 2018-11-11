import { curry, flow, keys, pickBy } from 'lodash/fp';
import { executeIfFunction } from './executeIfFunction';

const fn = (conditions, valueContainer) => flow(
  pickBy(condition => executeIfFunction(condition, valueContainer)),
  keys,
)(conditions);

export const fillArrayConditionally = curry(fn);
