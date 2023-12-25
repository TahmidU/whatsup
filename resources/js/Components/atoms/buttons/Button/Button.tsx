import { ReactNode, ComponentPropsWithRef } from "react";
import { ButtonContainer, LinkContainer } from "./styles";
import { ButtonDefaultStyles } from "./types/Styles";
import { Link } from "@inertiajs/react";

interface OwnProps extends ButtonDefaultStyles {
    children?: ReactNode;
    className?: string;
}

interface ButtonInterface
    extends OwnProps,
        Omit<ComponentPropsWithRef<"button">, keyof OwnProps> {
    as?: "button" | undefined | null;
}

interface LinkInterface
    extends OwnProps,
        Omit<ComponentPropsWithRef<typeof Link>, keyof OwnProps> {
    as: "link";
}

type Props = ButtonInterface | LinkInterface;

// Can't destruct `as` from here. Typescript loses the type infer
export default function Button({
    $variant = "action",
    $borderSize = "sm",
    children,
    className = "",
    ...restProps
}: Props) {
    if (restProps.as === "link") {
        const { as, ...specificProps } = restProps;
        return (
            <LinkContainer
                $variant={$variant}
                $borderSize={$borderSize}
                className={className}
                {...specificProps}
            >
                {children}
            </LinkContainer>
        );
    }

    const { as, ...specificProps } = restProps;
    return (
        <ButtonContainer
            $variant={$variant}
            $borderSize={$borderSize}
            className={className}
            {...specificProps}
        >
            {children}
        </ButtonContainer>
    );
}
