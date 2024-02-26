import { FormEvent } from "react";
import { LoginFormContainer } from "./LoginFormStyles";
import Button from "@/components/atoms/buttons/Button";
import Input from "@/components/atoms/Input";
import Checkbox from "@/components/atoms/Checkbox";

interface Props {}
export default function LoginForm({}: Props) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <LoginFormContainer>
            <header>
                <h2>Login</h2>
                <p>
                    <span>New to Whatsup? </span>
                    <Button
                        as="link"
                        $variant="link-text"
                        href={route("user.register")}
                    >
                        Register your accounts here.
                    </Button>
                </p>
            </header>

            <div className="login-main">
                <div className="login-form-inputs">
                    <label>
                        Username
                        <Input
                        // onChange={onHandleInputChange("username")}
                        />
                    </label>

                    <br />

                    <label>
                        Password
                        <Input
                            type="password"
                            // onChange={onHandleInputChange("password")}
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
                <Button
                    $borderSize="lg"
                    type="submit"
                    className="login-btn"
                    // disabled={isInvalid}
                >
                    Login
                </Button>
            </footer>
        </LoginFormContainer>
    );
}
