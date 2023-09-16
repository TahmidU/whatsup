import { Link } from "@inertiajs/react";
import { ComponentPropsWithRef, ReactNode } from "react";

interface Props extends ComponentPropsWithRef<typeof Link> {
    children?: ReactNode;
}
export default function LinkButton({ children, ...restProps }: Props) {
    return <Link {...restProps}>{children}</Link>;
}
