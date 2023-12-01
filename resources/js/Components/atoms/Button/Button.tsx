import { ReactNode, ComponentPropsWithRef } from "react";
import { ButtonContainer } from "./styles";
import { ButtonContainerStyle } from "./types/Styles";

interface Props extends ButtonContainerStyle, ComponentPropsWithRef<"button"> {
    children?: ReactNode;
    className?: string;
}
export default function Button({
    variant = "action",
    borderSize = "sm",
    children,
    className = "",
    ...restProps
}: Props) {
    return (
        <ButtonContainer
            $variant={variant}
            $borderSize={borderSize}
            className={className}
            {...restProps}
        >
            {children}
        </ButtonContainer>
    );
}
