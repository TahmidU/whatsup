import { ReactNode, Fragment, ComponentPropsWithRef } from "react";
import { NormalBtnContainer } from "./styles";

export type TextButtonVariant = {
    variant: "Text";
    type?: "ghost" | "bold";
};

export type NormalButtonVariant = {
    variant: "Normal";
    type?: "action" | "danger";
    borderSize?: "sm" | "md" | "lg";
};

export type ButtonWithVariants = (NormalButtonVariant | TextButtonVariant) &
    ComponentPropsWithRef<"button">;

type Props = {
    children?: ReactNode;
    className?: string;
} & ButtonWithVariants;
export default function Button({
    children,
    className = "",
    ...restProps
}: Props) {
    if (restProps.variant === "Normal") {
        const { type = "action", borderSize = "sm" } = restProps;

        return (
            <NormalBtnContainer
                type={type}
                borderSize={borderSize}
                className={className}
                {...restProps}
            >
                {children}
            </NormalBtnContainer>
        );
    }

    const {} = restProps;

    return <Fragment>{children}</Fragment>;
}
