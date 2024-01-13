import { CardContainer } from "@/components/atoms/Card/CardStyles";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}
export default function Card({ children, className = "" }: Props) {
    return <CardContainer className={className}>{children}</CardContainer>;
}
