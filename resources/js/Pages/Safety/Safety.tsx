import GuestLayout from "@/Components/organisms/layouts/GuestLayout";
import { SafetyContainer } from "@/Pages/Safety/styles";

const Safety = () => {
    return (
        <SafetyContainer>
            <h1>Coming Soon</h1>
        </SafetyContainer>
    );
};

Safety.layout = (page: any) => <GuestLayout children={page} />;

export default Safety;
