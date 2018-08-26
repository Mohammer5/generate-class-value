export type ConditionFunction<T> =
	(props: T) => boolean;

export type Condition<T> = ConditionFunction<T>
	| boolean;

export interface Conditions<T> {
	[className: string]: Condition<T>;
}

export type Props = any;

export type GenerateClassValue = <T>(
	conditions: Conditions<T>,
	props: any,
) => string;

