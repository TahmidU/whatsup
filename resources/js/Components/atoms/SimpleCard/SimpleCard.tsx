import { ReactNode } from "react";
import { SimpleCardContainer } from "./styles";
import { SimpleCardContainerStyle } from "./types/Styles";

export interface Props extends SimpleCardContainerStyle {
    children: ReactNode;
}
export default function SimpleCard({ shadow = "sm", children }: Props) {
    return (
        <SimpleCardContainer $shadow={shadow}>{children}</SimpleCardContainer>
    );
}
