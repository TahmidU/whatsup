import { NAV_LINKS } from "@/Components/organisms/common/Navbar/constants/Links";
import { Container, NavLink } from "./styles";

interface Props {
    selectedPage: (typeof NAV_LINKS)[number];
}
export default function Navbar({ selectedPage }: Props) {
    return (
        <Container>
            <div>
                <img />
            </div>

            <ul className="nav-list">
                {NAV_LINKS.map((link) => {
                    return (
                        <li key={link}>
                            <NavLink
                                title={link}
                                href={link}
                                $selected={selectedPage === link}
                            >
                                {link}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            <div></div>
        </Container>
    );
}
