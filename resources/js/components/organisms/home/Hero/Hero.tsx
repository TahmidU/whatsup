import DownChevronIcon from "@/Icons/DownChevronIcon";
import Button from "@/components/atoms/buttons/Button";
import WorldMap from "@/components/atoms/WorldMap";
import { HeroContainer } from "./HeroStyle";
import PublicImagesUtil from "@/utils/PublicImagesUtil";

interface Props<T extends HTMLElement> {
    scrollTo: T | null;
}
export default function Hero<T extends HTMLElement>({ scrollTo }: Props<T>) {
    function onHandleScrollTo() {
        scrollTo?.scrollIntoView?.({ behavior: "smooth" });
    }

    return (
        <HeroContainer>
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
                        Easy, reliable, private messaging. Available worldwide
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

                    <button className="scroll-down" onClick={onHandleScrollTo}>
                        <DownChevronIcon />
                        scroll down
                    </button>
                </footer>
            </section>
        </HeroContainer>
    );
}
