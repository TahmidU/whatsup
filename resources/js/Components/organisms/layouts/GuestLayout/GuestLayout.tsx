import Navbar from "@/Components/organisms/common/Navbar";
import { Container } from "./styles";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
export default function GuestLayout({ children }: Props) {
    return (
        <Container>
            <Navbar selectedPage="Home" />
            {children}
        </Container>
    );
}
