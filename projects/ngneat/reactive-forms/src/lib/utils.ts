export function coerceArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function isFunction(x: any): x is Function {
  return typeof x === 'function';
}

export function isNil<T>(v: T | null | undefined): v is null | undefined {
  return v === null || v === undefined;
}

export function isTruthy<T>(v: T | null | undefined): v is T {
  return !isNil(v);
}
