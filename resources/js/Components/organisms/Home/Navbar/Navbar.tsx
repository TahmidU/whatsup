import { Container } from "./styles";

interface Props {}
export default function Navbar({}: Props) {
    const NAV_LINKS = ["Home", "About", "Safety", "Support", "Careers"];

    return (
        <Container>
            <div>
                <img />
            </div>

            <ul className="nav-list">
                {NAV_LINKS.map((link) => {
                    return (
                        <li key={link}>
                            <a href={link}>{link}</a>
                        </li>
                    );
                })}
            </ul>

            <div></div>
        </Container>
    );
}
