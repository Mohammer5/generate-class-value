export const executeIfFunction = (value: any, ...args) =>
	typeof value === 'function'
    ? value(...args)
    : value;
