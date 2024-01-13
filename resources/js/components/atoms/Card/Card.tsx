import { CardContainer } from "@/components/atoms/Card/CardStyles";
import { CardContainerStyle } from "@/components/atoms/Card/types/Styles";
import { ReactNode } from "react";

interface Props extends CardContainerStyle {
    children: ReactNode;
    className?: string;
}
export default function Card({ children, className = "" }: Props) {
    return <CardContainer className={className}>{children}</CardContainer>;
}
