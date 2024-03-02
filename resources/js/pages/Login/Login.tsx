import LoginForm from "@/components/organisms/login/LoginForm";
import { LoginContainer } from "./LoginStyles";
import AuthLayout from "@/layouts/AuthLayout";

const Login = () => {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    );
};

Login.layout = (page: any) => {
    return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
