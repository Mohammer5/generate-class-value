import { curry } from 'lodash/fp';
import { fillArrayConditionally } from './fillArrayConditionally';

type ConditionFunction<T> = (valueContainer: T) => boolean;

export interface Conditions<T> {
    [className: string]: boolean | ConditionFunction<T>;
}

export type GenerateClassValue = <T>(conditions: Conditions<T>) =>
  (valueContainer: T) => string;

export const generateClassValue: GenerateClassValue
  = conditions =>
  	valueContainer => fillArrayConditionally(
			conditions,
			valueContainer
		)
			.join(' ');
