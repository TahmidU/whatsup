import { ComponentPropsWithRef, ReactNode } from "react";
import { LinkButtonContainer } from "./styles";

interface Props extends ComponentPropsWithRef<typeof LinkButtonContainer> {
    children?: ReactNode;
}
export default function LinkButton({ children, ...restProps }: Props) {
    return <LinkButtonContainer {...restProps}>{children}</LinkButtonContainer>;
}
