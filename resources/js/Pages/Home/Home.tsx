import Button from "@/Components/atoms/Button";
import WorldMap from "@/Components/atoms/WorldMap";
import GuestLayout from "@/Components/organisms/layouts/GuestLayout";
import { HomePageContainer, Hero, Feature } from "@/Pages/Home/styles";
import PublicImagesUtil from "@/utils/PublicImagesUtil";

const Home = () => {
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
                    </footer>
                </section>
            </Hero>

            <Feature>
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

                <div></div>
            </Feature>
        </HomePageContainer>
    );
};

Home.layout = (page: any) => <GuestLayout children={page} />;

export default Home;
