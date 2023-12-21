import Navbar from "@/Components/organisms/common/Navbar";
import { Footer, GuestLayoutContainer } from "./styles";
import { ReactNode } from "react";
import WhatsupIcon from "@/icons/WhatsupIcon";

interface Props {
    children: ReactNode;
}
export default function GuestLayout({ children }: Props) {
    return (
        <GuestLayoutContainer>
            <Navbar selectedPage="Home" />
            <div className="guest-children-container">{children}</div>

            <Footer>
                <section>
                    <header className="footer-logo">
                        <WhatsupIcon />
                    </header>
                    <div></div>
                    <footer>@ 2024 Whatsup. All rights reversed</footer>
                </section>
            </Footer>
        </GuestLayoutContainer>
    );
}
