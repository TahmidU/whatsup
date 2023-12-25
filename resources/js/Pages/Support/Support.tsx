import GuestLayout from "@/Layouts/GuestLayout";
import { SupportContainer } from "@/Pages/Support/SupportStyles";

const Support = () => {
    return (
        <SupportContainer>
            <h1>Coming Soon</h1>
        </SupportContainer>
    );
};

Support.layout = (page: any) => <GuestLayout children={page} />;

export default Support;
