import Button from "@/components/atoms/buttons/Button";
import { FinalPromptContainer } from "@/components/organisms/home/FinalPrompt/FinalPromptStyles";

export default function FinalPrompt() {
    return (
        <FinalPromptContainer>
            <header className="common-intro">
                <h1>
                    Get started now, everything you
                    <span>
                        <br /> need and more
                    </span>
                </h1>
                <h4>
                    Join one of the largest messaging platform out there with
                    over 120 million registered users and 200 billion messages
                    delivered per day for free!
                </h4>
                <Button $variant="ghost" $borderSize="lg">
                    Get started for free
                </Button>
            </header>
        </FinalPromptContainer>
    );
}
