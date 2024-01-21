import GuestLayout from "@/layouts/GuestLayout";
import { HomePageContainer } from "@/pages/Home/HomeStyles";
import { useState } from "react";
import Hero from "@/components/organisms/home/Hero";
import Feature from "@/components/organisms/home/Feature";
import FinalPrompt from "@/components/organisms/home/FinalPrompt";

const Home = () => {
    const [scrollToRef, setScrollToRef] = useState<HTMLElement | null>(null);

    return (
        <HomePageContainer>
            <Hero scrollTo={scrollToRef} />
            <Feature setScrollToRef={setScrollToRef} />
            <FinalPrompt />
        </HomePageContainer>
    );
};

Home.layout = (page: any) => <GuestLayout children={page} />;

export default Home;
