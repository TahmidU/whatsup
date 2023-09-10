import { ReactNode, MouseEvent, Fragment } from "react";
import { NormalBtnContainer } from "./styles";

export type TextButtonType = {
    variant: "Text";
    type?: "ghost" | "bold";
};

export type NormalButtonType = {
    variant: "Normal";
    type?: "action" | "danger";
    borderSize?: "sm" | "md" | "lg";
};

type Props = {
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
} & (NormalButtonType | TextButtonType);
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
            >
                {children}
            </NormalBtnContainer>
        );
    }

    const {} = restProps;

    return <Fragment>{children}</Fragment>;
}
