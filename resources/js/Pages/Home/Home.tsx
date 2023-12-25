import Button from "@/Components/Atoms/Buttons/Button";
import WorldMap from "@/Components/Organisms/Home/WorldMap";
import FeatureSlide from "@/Components/Organisms/Home/FeatureSlide";
import GuestLayout from "@/Layouts/GuestLayout";
import {
    HomePageContainer,
    Hero,
    Feature,
    FinalPrompt,
} from "@/Pages/Home/HomeStyles";
import DownChevronIcon from "@/Icons/DownChevronIcon";
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
                    <header className="common-intro">
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
                        <Button $variant="ghost" $borderSize="lg">
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
                <header className="common-intro">
                    <h1>
                        Discover the technology that will
                        <span>
                            <br /> power your chat
                        </span>
                    </h1>
                    <h4>
                        We aim to optimise our tech to provide a secure and
                        reliable experience
                    </h4>
                    <Button $variant="ghost" $borderSize="lg">
                        Signup for free
                    </Button>
                </header>

                <FeatureSlide />
            </Feature>

            <FinalPrompt>
                <header className="common-intro">
                    <h1>
                        Get started now, everything you
                        <span>
                            <br /> need and more
                        </span>
                    </h1>
                    <h4>
                        Join one of the largest messaging platform out there
                        with over 120 million registered users and 200 billion
                        messages delivered per day for free!
                    </h4>
                    <Button $variant="ghost" $borderSize="lg">
                        Get started for free
                    </Button>
                </header>
            </FinalPrompt>
        </HomePageContainer>
    );
};

Home.layout = (page: any) => <GuestLayout children={page} />;

export default Home;
