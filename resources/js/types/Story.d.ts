import type { Meta } from "@storybook/react";

export type StoryType = "ATOMS" | "MOLECULES" | "ORGANISMS";

export type PayloadTitle = `${StoryType}/${string}`;

export type MetaPayload<T> = {
    title: PayloadTitle;
} & Meta<T>;
