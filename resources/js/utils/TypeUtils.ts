export type PrefixObjectKeys<P extends string, K> = {
    [T in keyof K as T extends string ? `${P}${T}` : never]: K[T];
};

export type ShallowFlatten<T, K extends keyof T> = T[K];

export type CapitalizeKeys<K, V> = keyof K extends string
    ? {
          [key in Capitalize<keyof K>]: V;
      }
    : never;
