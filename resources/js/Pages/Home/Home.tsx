import Button from "@/Components/atoms/Button";
import WorldMap from "@/Components/atoms/WorldMap";
import GuestLayout from "@/Components/organisms/layouts/GuestLayout";
import { Container, Hero } from "@/Pages/Home/styles";
import PublicImagesUtil from "@/utils/PublicImagesUtil";

const Home = () => {
    return (
        <Container>
            <Hero>
                <section>
                    <header>
                        <h1 className="hero-title">
                            <p>Next generation web app for</p>
                            <p>secure and private messaging</p>
                            <div className="glow" />
                        </h1>
                        <h2>
                            Easy, reliable, private messaging. Available
                            worldwide
                        </h2>
                        <Button variant="ghost" borderSize="lg">
                            Get Started
                        </Button>
                    </header>

                    <footer className="hero-preview">
                        <img
                            src={PublicImagesUtil.getPublicImage({
                                type: "assets",
                                name: "chat_page",
                            })}
                        />
                    </footer>
                </section>

                <div className="hero-background">
                    <WorldMap selectNum={100} selectionInterval={5} />
                </div>
            </Hero>
        </Container>
    );
};

Home.layout = (page: any) => <GuestLayout children={page} />;

export default Home;
