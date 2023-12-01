export type PrefixObjectKeys<P extends string, K> = {
    [T in keyof K as T extends string ? `${P}${T}` : never]: K[T];
};

export type ShallowFlatten<T, K extends keyof T> = T[K];
