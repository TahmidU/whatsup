import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export type StoryType = "ATOMS" | "MOLECULES" | "ORGANISMS";

export type PayloadTitle = `${StoryType}/${string}`;

export interface IPayload {
    title: PayloadTitle;
    component: any;
    [extra: string | number | symbol]: unknown;
}
