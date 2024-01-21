import Button from "@/components/atoms/buttons/Button";
import FeatureSlide from "@/components/organisms/common/FeatureSlide";
import { FeatureContainer } from "@/components/organisms/home/Feature/FeatureStyles";
import { Dispatch, SetStateAction } from "react";

interface Props {
    setScrollToRef: Dispatch<SetStateAction<HTMLElement | null>>;
}
export default function Feature({ setScrollToRef }: Props) {
    return (
        <FeatureContainer ref={setScrollToRef}>
            <header className="common-intro">
                <h1>
                    Discover the technology that will
                    <span>
                        <br /> power your chat
                    </span>
                </h1>
                <h4>
                    We aim to optimise our tech to provide a secure and reliable
                    experience
                </h4>
                <Button $variant="ghost" $borderSize="lg">
                    Signup for free
                </Button>
            </header>

            <FeatureSlide />
        </FeatureContainer>
    );
}
