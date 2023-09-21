import { ComponentProps, ReactNode } from "react";
import { CardContainer, Footer, Header, MainSegment } from "./styles";
import SimpleCard from "@/Components/atoms/SimpleCard";

interface Props extends ComponentProps<typeof SimpleCard> {
    header?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
}
export default function Card({ header, children, footer, shadow }: Props) {
    return (
        <CardContainer shadow={shadow}>
            <Header>{header}</Header>
            <MainSegment>{children}</MainSegment>
            <Footer>{footer}</Footer>
        </CardContainer>
    );
}
