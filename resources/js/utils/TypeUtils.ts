export type PrefixKey<P, K> = P extends string
    ? K extends string
        ? `${P}${K}`
        : never
    : never;

export type PrefixObjectKeys<P extends string, K> = {
    [T in PrefixKey<P, keyof K>]: K[keyof K];
};
