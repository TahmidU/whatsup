import Button from "@/Components/atoms/Button";
import { Container, Footer, Header } from "./styles";

export default function LoginForm() {
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
            <section>
                {/* Input component */}
                {/* Checkbox component */}
                {/* Button component */}
                <Button variant="Normal" borderSize="lg">
                    Login
                </Button>
            </section>
            <Footer></Footer>
        </Container>
    );
}
