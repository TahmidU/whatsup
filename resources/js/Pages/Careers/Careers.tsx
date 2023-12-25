import GuestLayout from "@/Layouts/GuestLayout";
import { CareersContainer } from "@/Pages/Careers/CareersStyles";

const Careers = () => {
    return (
        <CareersContainer>
            <h1>Coming Soon</h1>
        </CareersContainer>
    );
};

Careers.layout = (page: any) => <GuestLayout children={page} />;

export default Careers;
