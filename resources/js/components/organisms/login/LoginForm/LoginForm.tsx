import { FormEvent } from "react";
import { LoginFormContainer } from "./LoginFormStyles";
import Button from "@/components/atoms/buttons/Button";
import Input from "@/components/atoms/Input";
import Checkbox from "@/components/atoms/Checkbox";
import { router, useForm } from "@inertiajs/react";

interface Props {}
export default function LoginForm({}: Props) {
    const { data, setData } = useForm({
        username: "",
        password: "",
    });

    const onHandleInputChange =
        (inputData: keyof typeof data) => (e: FormEvent<HTMLInputElement>) => {
            setData(inputData, e.currentTarget.value);
        };

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        router.post(route("login.show"), data, {
            preserveScroll: true,
            preserveState: true,
        });
    }

    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            <header>
                <h2>Login</h2>
                <p>
                    <span>New to Whatsup? </span>
                    <Button
                        as="link"
                        $variant="link-text"
                        href={route("register.show")}
                    >
                        Register your accounts here.
                    </Button>
                </p>
            </header>

            <div className="login-main">
                <div className="login-form-inputs">
                    <label>
                        Username
                        <Input onChange={onHandleInputChange("username")} />
                    </label>

                    <br />

                    <label>
                        Password
                        <Input
                            type="password"
                            onChange={onHandleInputChange("password")}
                        />
                    </label>
                </div>

                <div className="main-footer">
                    <label className="remember-me">
                        <Checkbox className="remember-me-checkbox" />
                        Remember Me
                    </label>

                    <Button $variant="link-text" className="forgot-password">
                        Forgot Password?
                    </Button>
                </div>
            </div>

            <footer>
                <Button $borderSize="lg" type="submit" className="login-btn">
                    Login
                </Button>
            </footer>
        </LoginFormContainer>
    );
}
