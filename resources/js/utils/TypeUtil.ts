export type DynamicKeys<FK, SK> =
    FK extends string ?
    SK extends string ?
    `${FK}${Capitalize<SK>}`
    : never
    : never;