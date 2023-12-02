import { LINK_NAMES } from "@/Components/organisms/common/Navbar/constants/Links";
import { Container, NavLink } from "./styles";
import { PageType } from "@/Components/organisms/common/Navbar/types/Link";
import { getPublicImage } from "@/utils/PublicImagesUtil";
import Button from "@/Components/atoms/Button";

interface Props {
    selectedPage: PageType;
}
export default function Navbar({ selectedPage }: Props) {
    return (
        <Container>
            <div className="logo">
                <img
                    src={getPublicImage({ name: "logo_dark", type: "logo" })}
                />
            </div>

            <ul className="nav-list">
                {LINK_NAMES.map((link) => {
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

            <div className="actions">
                <Button variant="text">Sign Up</Button>
                <Button variant="ghost" borderSize="lg">
                    Login
                </Button>
            </div>
        </Container>
    );
}
