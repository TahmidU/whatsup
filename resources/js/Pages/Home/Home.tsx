import Button from "@/Components/atoms/Button";
import WorldMap from "@/Components/atoms/WorldMap";
import FeatureSlide from "@/Components/organisms/home/FeatureSlide";
import GuestLayout from "@/Components/organisms/layouts/GuestLayout";
import { HomePageContainer, Hero, Feature } from "@/Pages/Home/styles";
import DownChevronIcon from "@/icons/DownChevronIcon";
import PublicImagesUtil from "@/utils/PublicImagesUtil";
import { useRef } from "react";

const Home = () => {
    const featureSectionRef = useRef<HTMLDivElement | null>(null);

    function scrollToFeaturesSection() {
        featureSectionRef.current?.scrollIntoView?.({ behavior: "smooth" });
    }

    return (
        <HomePageContainer>
            <Hero>
                <div className="hero-background">
                    <WorldMap selectNum={100} selectionInterval={5} />
                </div>

                <section className="hero-intro">
                    <header>
                        <h1>
                            Next generation web app for{" "}
                            <span>
                                <br />
                                secure and private messaging
                            </span>
                        </h1>
                        <h2>
                            Easy, reliable, private messaging. Available
                            worldwide
                        </h2>
                        <Button variant="ghost" borderSize="lg">
                            Get Started
                        </Button>
                    </header>

                    <footer>
                        <div className="preview-opacity-gradient">
                            <div className="preview-border-animation">
                                <div className="preview-container">
                                    <img
                                        src={PublicImagesUtil.getPublicImage({
                                            type: "assets",
                                            name: "chat_page",
                                        })}
                                        alt="chat_page"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            className="scroll-down"
                            onClick={scrollToFeaturesSection}
                        >
                            <DownChevronIcon />
                            scroll down
                        </button>
                    </footer>
                </section>
            </Hero>

            <Feature ref={featureSectionRef}>
                <div className="feature-intro">
                    <h1>
                        Discover the technology that will
                        <span>
                            <br /> power you chat
                        </span>
                    </h1>
                    <h4>
                        We aim to optimise our tech to provide a secure and
                        reliable experience
                    </h4>
                    <Button variant="ghost" borderSize="lg">
                        Signup for free
                    </Button>
                </div>

                <div>
                    <FeatureSlide />
                </div>
            </Feature>
        </HomePageContainer>
    );
};

Home.layout = (page: any) => <GuestLayout children={page} />;

export default Home;
