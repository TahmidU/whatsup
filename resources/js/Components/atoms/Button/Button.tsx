import { ReactNode, Fragment, ComponentPropsWithRef } from "react";
import { NormalBtnContainer } from "./styles";

export type NormalButtonType = "action" | "danger";
export type NormalButtonBorderSize = "sm" | "md" | "lg";
export type NormalButtonVariant = {
    variant: "Normal";
    type?: NormalButtonType;
    borderSize?: NormalButtonBorderSize;
};

export type ButtonWithVariants = NormalButtonVariant &
    ComponentPropsWithRef<"button">;

type Props = {
    children?: ReactNode;
    className?: string;
} & ButtonWithVariants;
export default function Button({
    variant,
    children,
    className = "",
    ...restProps
}: Props) {
    if (variant === "Normal") {
        const {
            type = "action",
            borderSize = "sm",
            ...restVariantProps
        } = restProps;

        return (
            <NormalBtnContainer
                $type={type}
                $borderSize={borderSize}
                className={className}
                {...restVariantProps}
            >
                {children}
            </NormalBtnContainer>
        );
    }

    const {} = restProps;

    return <Fragment>{children}</Fragment>;
}
