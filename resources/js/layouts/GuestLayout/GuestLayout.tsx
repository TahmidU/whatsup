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
        <div className="w-full h-auto min-h-screen bg-primary-950">
            <Navbar />
            <div className="my-0 mx-auto max-w-[2048px]">{children}</div>

            <footer className="flex w-full h-full pt-16 pb-40 pl-40 pr-40 bg-primary-900 gap-x-40">
                <section className="flex flex-col gap-y-4">
                    <header className="w-12 h-12">
                        <WhatsupIcon className="w-full h-full" />
                    </header>
                    <div className="flex gap-x-3 [&>svg]:text-white">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                        <TikTokIcon />
                    </div>
                    <footer className="mt-2 text-sm text-neutral-300">
                        @ 2024 Whatsup. All rights reversed
                    </footer>
                </section>
                <div className="grid w-full grid-cols-4 text-white [&>ul]:p-0 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-y-2 [&>ul]:list-none [&>ul>li]:text-sm [&>ul>li]:cursor-pointer [&>ul>li]:opacity-80 hover:[&>ul>li]:opacity-100">
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
            </footer>
        </div>
    );
}
