declare type ConditionFunction<T> = (valueContainer: T) => boolean;
export interface Conditions<T> {
    [className: string]: boolean | ConditionFunction<T>;
}
export declare type GenerateClassValue = <T>(conditions: Conditions<T>) => (valueContainer: T) => string;
export declare const generateClassValue: GenerateClassValue;
export {};
