import { FormEvent } from "react";
import { Container, Footer, Form, Header } from "./styles";
import LabelledInput from "@/Components/molecules/LabelledInput";
import Button from "@/Components/atoms/Button";
import LinkButton from "@/Components/atoms/LinkButton";

type Props = {};
export default function LoginForm({}: Props) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    // Refactor this, create and use Card component
    return (
        <Container>
            <Header>
                <div>
                    <img src="logo/logo_alt.png" />
                </div>
                <section>
                    <span>Welcome back!</span>
                    <span>Please enter your details</span>
                </section>
            </Header>
            <Form onSubmit={handleSubmit}>
                <LabelledInput
                    labelName="Email"
                    idAttribute="email-login-form"
                />
                <LabelledInput
                    labelName="Password"
                    idAttribute="password-login-form"
                    type="password"
                />
                {/* Checkbox component */}
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
