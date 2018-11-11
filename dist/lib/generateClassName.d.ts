declare type ConditionFunction<T> = (valueContainer: T) => boolean;
export interface Conditions<T> {
    [className: string]: boolean | ConditionFunction<T>;
}
export declare type GenerateClassName = <T>(conditions: Conditions<T>) => (valueContainer: T) => string;
export declare const generateClassName: GenerateClassName;
export {};
