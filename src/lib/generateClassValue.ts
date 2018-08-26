import { reduce } from 'lodash/fp';
import { GenerateClassValue } from '../index.d';
import { executeIfFunction } from './executeIfFunction';

const uncappedReduce = reduce.convert({ cap: false });

export const generateClassValue: GenerateClassValue =
	<T>(conditions, props) => uncappedReduce(
		(classNames, currentCondition, currentClassName) =>
		  executeIfFunction(currentCondition, props)
		    ? [ ...classNames, currentClassName ]
		    : classNames,
		[],
		conditions,
	).join(' ');
