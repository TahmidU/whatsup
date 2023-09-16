import { ReactNode, ComponentPropsWithRef } from "react";
import { ButtonContainer } from "./styles";

export type ButtonType = "action" | "danger";
export type BorderSizeType = "sm" | "md" | "lg";
export type ButtonStyle = {
    buttonType?: ButtonType;
    borderSize?: BorderSizeType;
};

export type ButtonWithVariants = ButtonStyle & ComponentPropsWithRef<"button">;

type Props = {
    children?: ReactNode;
    className?: string;
} & ButtonWithVariants;
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
