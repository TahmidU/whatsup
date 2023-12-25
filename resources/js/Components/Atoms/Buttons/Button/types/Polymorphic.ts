import { ButtonDefaultStyles } from "@/Components/Atoms/Buttons/Button/types/Styles";
import { Link } from "@inertiajs/react";
import { ComponentPropsWithRef, ReactNode } from "react";

export interface OwnProps extends ButtonDefaultStyles {
    children?: ReactNode;
    className?: string;
}

export interface ButtonInterface
    extends OwnProps,
        Omit<ComponentPropsWithRef<"button">, keyof OwnProps> {
    as?: "button" | undefined | null;
}

export interface LinkInterface
    extends OwnProps,
        Omit<ComponentPropsWithRef<typeof Link>, keyof OwnProps> {
    as: "link";
}
