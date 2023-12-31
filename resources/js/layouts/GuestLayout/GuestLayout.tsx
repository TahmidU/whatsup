import Navbar from "@/components/organisms/common/Navbar";
import { Footer, GuestLayoutContainer } from "./GuestLayoutStyles";
import { ReactNode } from "react";
import WhatsupIcon from "@/Icons/WhatsupIcon";
import TwitterIcon from "@/Icons/TwitterIcon";
import FacebookIcon from "@/Icons/FacebookIcon";
import InstagramIcon from "@/Icons/InstagramIcon";
import YouTubeIcon from "@/Icons/YouTubeIcon";
import TikTokIcon from "@/Icons/TikTokIcon";

interface Props {
    children: ReactNode;
}
export default function GuestLayout({ children }: Props) {
    return (
        <GuestLayoutContainer>
            <Navbar />
            <div className="guest-children-container">{children}</div>

            <Footer>
                <section className="footer-intro">
                    <header className="footer-logo">
                        <WhatsupIcon />
                    </header>
                    <div className="footer-social-logos">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                        <TikTokIcon />
                    </div>
                    <footer className="footer-copyright">
                        @ 2024 Whatsup. All rights reversed
                    </footer>
                </section>
                <div className="footer-options">
                    <div className="footer-product">
                        <h4>Product</h4>
                        <ul>
                            <li>Download</li>
                            <li>Status</li>
                            <li>App Directory</li>
                        </ul>
                    </div>
                    <div className="footer-company">
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Brand</li>
                            <li>Newsroom</li>
                            <li>Fall Release</li>
                        </ul>
                    </div>
                    <div className="footer-resources">
                        <h4>Resources</h4>
                        <ul>
                            <li>Support</li>
                            <li>Safety</li>
                            <li>Blog</li>
                            <li>Feedback</li>
                            <li>Developers</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className="footer-policies">
                        <h4>Policies</h4>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookie Settings</li>
                            <li>Guidelines</li>
                            <li>Acknowledgements</li>
                            <li>Licenses</li>
                            <li>Company Information</li>
                        </ul>
                    </div>
                </div>
            </Footer>
        </GuestLayoutContainer>
    );
}
