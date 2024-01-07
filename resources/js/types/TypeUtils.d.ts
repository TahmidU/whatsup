// Checks if the type is number, boolean or string. Otherwise it's never
export type FindPrimitiveType<T> = T extends "number"
    ? number
    : T extends "boolean"
    ? boolean
    : T extends "string"
    ? string
    : never;

// Removes the read-only modifier
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

// Constructs an object type from an object variable
export type MakeType<T> = {
    [key in keyof T]: FindPrimitiveType<T[key]>;
};

// Map P to each key of K
export type PrefixObjectKeys<P extends string, K> = {
    [T in keyof K as T extends string ? `${P}${T}` : never]: K[T];
};

// Flatten
export type ShallowFlatten<T, K extends keyof T> = T[K];

// Capitalize the keys in object
export type CapitalizeKeys<K, V> = keyof K extends string
    ? {
          [key in Capitalize<keyof K>]: V;
      }
    : never;
