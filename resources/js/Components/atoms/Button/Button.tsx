import { ReactNode, ComponentPropsWithRef } from "react";
import { ButtonContainer } from "./styles";

export type ButtonType = "action" | "danger";
export type BorderSizeType = "sm" | "md" | "lg" | "xl";
export interface ButtonStyle {
    buttonType?: ButtonType;
    borderSize?: BorderSizeType;
}

export interface ButtonWithVariants
    extends ButtonStyle,
        ComponentPropsWithRef<"button"> {}

interface Props extends ButtonWithVariants {
    children?: ReactNode;
    className?: string;
}
export default function Button({
    buttonType = "action",
    borderSize = "sm",
    children,
    className = "",
    ...restProps
}: Props) {
    return (
        <ButtonContainer
            $buttonType={buttonType}
            $borderSize={borderSize}
            className={className}
            {...restProps}
        >
            {children}
        </ButtonContainer>
    );
}
