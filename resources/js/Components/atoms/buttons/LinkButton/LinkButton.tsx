import { ComponentPropsWithRef, ReactNode } from "react";
import { LinkButtonContainer } from "./styles";

interface Props extends ComponentPropsWithRef<typeof LinkButtonContainer> {
    children?: ReactNode;
    className?: string;
}
export default function LinkButton({
    children,
    className = "",
    ...restProps
}: Props) {
    return (
        <LinkButtonContainer className={className} {...restProps}>
            {children}
        </LinkButtonContainer>
    );
}
