/**
 * Null or whatever
 */
declare type Nullable<T> = T | null | undefined;
/**
 * Function
 */
declare type Fn<T = void> = () => T;

/**
 * Call every function in an array
 */
declare function batchInvoke(functions: Nullable<Fn>[]): void;
/**
 * Call the function
 */
declare function invoke(fn: Fn): void;
/**
 * Pass the value through the callback, and return the value
 *
 * @example
 * ```
 * function createUser(name: string): User {
 *   return tap(new User, user => {
 *     user.name = name
 *   })
 * }
 * ```
 */
declare function tap<T>(value: T, callback: (value: T) => void): T;

export { batchInvoke, invoke, tap };
