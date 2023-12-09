import Navbar from "@/Components/organisms/common/Navbar";
import { GuestLayoutContainer } from "./styles";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
export default function GuestLayout({ children }: Props) {
    return (
        <GuestLayoutContainer>
            <Navbar selectedPage="Home" />
            {children}
        </GuestLayoutContainer>
    );
}
