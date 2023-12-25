import GuestLayout from "@/Layouts/GuestLayout";
import { SafetyContainer } from "@/Pages/Safety/SafetyStyles";

const Safety = () => {
    return (
        <SafetyContainer>
            <h1>Coming Soon</h1>
        </SafetyContainer>
    );
};

Safety.layout = (page: any) => <GuestLayout children={page} />;

export default Safety;
