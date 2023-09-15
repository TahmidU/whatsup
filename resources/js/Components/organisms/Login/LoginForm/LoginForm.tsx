import Button from "@/Components/atoms/Button";
import { FormEvent } from "react";
import { Container, Footer, Form, Header, LoginButton } from "./styles";
import Input from "@/Components/atoms/Input";

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
                <Input />
                {/* Checkbox component */}
                <LoginButton variant="Normal" borderSize="lg">
                    Login
                </LoginButton>
            </Form>
            <Footer></Footer>
        </Container>
    );
}
