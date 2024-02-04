import AuthFloatInfo from "@/components/organisms/common/AuthFloatInfo/AuthFloatInfo";
import { AuthLayoutContainer } from "@/layouts/AuthLayout/AuthLayoutStyles";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
export default function AuthLayout({ children }: Props) {
    return (
        <AuthLayoutContainer>
            {children}
            <AuthFloatInfo />
        </AuthLayoutContainer>
    );
}
