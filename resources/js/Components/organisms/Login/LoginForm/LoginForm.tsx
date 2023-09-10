import Button from "@/Components/atoms/Button";
import { Container, Footer, Header } from "./styles";

export default function LoginForm() {
    return (
        <Container>
            <Header></Header>
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
