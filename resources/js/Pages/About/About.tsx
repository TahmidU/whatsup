import GuestLayout from "@/Layouts/GuestLayout";
import { AboutContainer } from "@/Pages/About/AboutStyles";

const About = () => {
    return (
        <AboutContainer>
            <h1>Coming Soon</h1>
        </AboutContainer>
    );
};

About.layout = (page: any) => <GuestLayout children={page} />;

export default About;
