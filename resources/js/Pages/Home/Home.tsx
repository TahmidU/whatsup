import Button from "@/Components/atoms/Button";
import WorldMap from "@/Components/atoms/WorldMap";
import GuestLayout from "@/Components/organisms/layouts/GuestLayout";
import { Hero } from "@/Pages/Home/styles";
import { Container } from "@/Pages/Login/styles";

const Home = () => {
    return (
        <Container>
            <Hero>
                <header>
                    <h1 className="hero-title">
                        <p>Next generation web app for</p>
                        <p>secure and private messaging</p>
                        <div className="glow" />
                    </h1>
                    <h2>
                        Easy, reliable, private messaging. Available worldwide
                    </h2>
                    <Button variant="ghost" borderSize="lg">
                        Get Started
                    </Button>
                </header>

                <div className="hero-background">
                    <WorldMap selectNum={100} selectionInterval={5} />
                </div>

                <footer className="hero-preview"></footer>
            </Hero>
        </Container>
    );
};

Home.layout = (page: any) => <GuestLayout children={page} />;

export default Home;
