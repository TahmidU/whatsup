import { ReactNode } from "react";
import { SimpleCardContainer } from "./styles";
import { SimpleCardContainerStyle } from "./types/Styles";

export interface Props extends SimpleCardContainerStyle {
    children: ReactNode;
    className?: string;
}
export default function SimpleCard({
    shadow = "sm",
    children,
    className = "",
}: Props) {
    return (
        <SimpleCardContainer $shadow={shadow} className={className}>
            {children}
        </SimpleCardContainer>
    );
}
