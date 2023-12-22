import GuestLayout from "@/Components/organisms/layouts/GuestLayout";
import { SupportContainer } from "@/Pages/Support/styles";

const Support = () => {
    return (
        <SupportContainer>
            <h1>Coming Soon</h1>
        </SupportContainer>
    );
};

Support.layout = (page: any) => <GuestLayout children={page} />;

export default Support;
