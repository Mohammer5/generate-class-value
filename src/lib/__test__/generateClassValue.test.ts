import { Conditions } from '../../index.d';
import { generateClassValue } from '../generateClassValue';

describe('generateClassValue', () => {
	it('should return an empty string when no condition is met', () => {
		const conditions = {
			'block__element--foo': (props) => props === 'foo',
			'block__element--bar': (props) => props === 'bar',
		};

		expect(generateClassValue(conditions)('baz')).toBe('');
	});

	it('should return one class name when one condition is met', () => {
		const conditions = {
			'block__element--foo': (props) => props === 'foo',
			'block__element--bar': (props) => props === 'bar',
		};

		expect(generateClassValue(conditions)('foo')).toBe('block__element--foo');
	});

	it('should return the class names seperated by spaced when multiple conditions are met', () => {
		interface Props {
			foo: boolean;
			bar: boolean;
		}

		const conditions: Conditions<Props> = {
			'block__element--foo': ({ foo }) => foo,
			'block__element--bar': ({ bar }) => bar,
		};

		const props: Props = {
			foo: true,
			bar: true,
		};

		expect(generateClassValue(conditions)(props)).toBe('block__element--foo block__element--bar');
	});
});
