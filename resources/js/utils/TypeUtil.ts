export type PrefixKeys<P, K> = P extends string
    ? K extends string
        ? `${P}${K}`
        : never
    : never;
