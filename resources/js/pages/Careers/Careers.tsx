import GuestLayout from "@/layouts/GuestLayout";
import { CareersContainer } from "@/pages/Careers/CareersStyles";

const Careers = () => {
    return (
        <CareersContainer>
            <h1>Coming Soon</h1>
        </CareersContainer>
    );
};

Careers.layout = (page: any) => <GuestLayout children={page} />;

export default Careers;
