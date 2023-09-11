import { ReactNode, MouseEvent, Fragment, HTMLProps } from "react";
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

type Props = {
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
} & (NormalButtonVariant | TextButtonVariant) &
    HTMLProps<HTMLButtonElement>;
export default function Button({
    children,
    onClick = () => {},
    ...restProps
}: Props) {
    if (restProps.variant === "Normal") {
        const { type = "action", borderSize = "sm" } = restProps;

        return (
            <NormalBtnContainer
                type={type}
                borderSize={borderSize}
                onClick={onClick}
                {...restProps}
            >
                {children}
            </NormalBtnContainer>
        );
    }

    const {} = restProps;

    return <Fragment>{children}</Fragment>;
}
