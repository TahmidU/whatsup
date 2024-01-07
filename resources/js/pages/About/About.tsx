import GuestLayout from "@/layouts/GuestLayout";
import { AboutContainer } from "@/pages/About/AboutStyles";

const About = () => {
    return (
        <AboutContainer>
            <h1>Coming Soon</h1>
        </AboutContainer>
    );
};

About.layout = (page: any) => <GuestLayout children={page} />;

export default About;
