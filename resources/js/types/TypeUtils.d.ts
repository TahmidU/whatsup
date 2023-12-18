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
