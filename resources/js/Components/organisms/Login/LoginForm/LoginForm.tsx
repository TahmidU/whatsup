import { FormEvent } from "react";
import { Container, Footer, Form, Header } from "./styles";
import LabelledInput from "@/Components/molecules/LabelledInput";
import Button from "@/Components/atoms/Button";
import LinkButton from "@/Components/atoms/LinkButton";
import Checkbox from "@/Components/atoms/Checkbox";

type Props = {};
export default function LoginForm({}: Props) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    // Refactor this, create and use Card component
    return (
        <Container>
            <Header>
                <div className="logo-container">
                    <img src="logo/logo_alt.png" />
                </div>
                <section className="welcome-segment">
                    <span>Welcome back!</span>
                    <span>Please enter your details</span>
                </section>
            </Header>
            <Form onSubmit={handleSubmit}>
                <div className="login-main-segment">
                    <div className="login-typed-inputs">
                        <LabelledInput
                            labelName="Email"
                            idAttribute="email-login-form"
                            type="email"
                        />
                        <LabelledInput
                            labelName="Password"
                            idAttribute="password-login-form"
                            type="password"
                        />
                    </div>
                    <div className="login-main-options">
                        <Checkbox
                            idAttribute="remember-me-login-form"
                            title="Remember me"
                        />
                        <LinkButton href="">Forgot Password?</LinkButton>
                    </div>
                </div>

                <Button borderSize="xl">Login</Button>
            </Form>
            <Footer>
                <span>
                    {"Don't"} have an account?{" "}
                    <LinkButton href="">Sign Up</LinkButton>
                </span>
            </Footer>
        </Container>
    );
}
