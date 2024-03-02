import AuthLayout from "@/layouts/AuthLayout";
import {
    RegisterContainer,
    StyledRegisterForm,
} from "@/pages/Register/RegisterStyles";

const Register = () => {
    return (
        <RegisterContainer>
            <StyledRegisterForm />
        </RegisterContainer>
    );
};

Register.layout = (page: any) => {
    return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
