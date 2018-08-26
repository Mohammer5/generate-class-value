import { executeIfFunction } from '../executeIfFunction';

describe('executeIfFunction', () => {
  const spy = jest.fn();

	beforeEach(() => {
		spy.mockClear();
	});

	it('should execute the first parameter when called with a function', () => {
		executeIfFunction(spy);
		expect(spy).toHaveBeenCalled();
	});

	it('should pass all provided arguments to the function when called with extra args', () => {
		executeIfFunction(spy, 1, 2, 3);
		expect(spy).toHaveBeenCalledWith(1, 2, 3);
	});

	it('should return the value itself when the value is not a function', () => {
		expect(executeIfFunction('foo')).toBe('foo');
	});
});
