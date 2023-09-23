import { ComponentProps, ReactNode } from "react";
import { CardContainer, Footer, Header, MainSegment } from "./styles";
import SimpleCard from "@/Components/atoms/SimpleCard";

interface Props extends ComponentProps<typeof SimpleCard>, CardContainerStyle {
    header?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
}
export default function Card({
    header,
    children,
    footer,
    shadow,
    borderSize = "xl",
    className = "",
}: Props) {
    // TODO: In the future, allow this component to take header string and footer buttons (apply & cancel). These are common.
    return (
        <CardContainer
            $borderSize={borderSize}
            shadow={shadow}
            className={className}
        >
            <Header>{header}</Header>
            <MainSegment className="main-segment">{children}</MainSegment>
            <Footer>{footer}</Footer>
        </CardContainer>
    );
}
