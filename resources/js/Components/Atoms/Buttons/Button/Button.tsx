import { ComponentProps, ReactNode } from "react";
import { ButtonContainer, LinkContainer } from "./ButtonStyles";
import { Link } from "@inertiajs/react";
import { ButtonDefaultStyles } from "@/Components/Atoms/Buttons/Button/types/Styles";

type ButtonAsType = "button" | "link";
type ButtonProps<T extends ButtonAsType> = T extends "link"
    ? ComponentProps<typeof Link>
    : ComponentProps<"button">;

export interface OwnProps<T extends ButtonAsType> extends ButtonDefaultStyles {
    as?: T;
    children?: ReactNode;
    className?: string;
}

type Props<T extends ButtonAsType> = OwnProps<T> &
    Omit<ButtonProps<T>, keyof OwnProps<T>>;

export default function Button<T extends ButtonAsType = "button">({
    as,
    $variant = "action",
    $borderSize = "sm",
    children,
    className = "",
    ...restProps
}: Props<T>) {
    if (as === "link") {
        return (
            <LinkContainer
                $variant={$variant}
                $borderSize={$borderSize}
                className={className}
                {...(restProps as unknown as ComponentProps<typeof Link>)}
            >
                {children}
            </LinkContainer>
        );
    }

    return (
        <ButtonContainer
            $variant={$variant}
            $borderSize={$borderSize}
            className={className}
            {...(restProps as unknown as ComponentProps<"button">)}
        >
            {children}
        </ButtonContainer>
    );
}
