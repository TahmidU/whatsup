import {
    LINK_NAMES,
    NAV_LINKS_ROUTES,
} from "@/Components/organisms/common/Navbar/constants/Links";
import { Container, NavLink } from "./styles";
import { PageType } from "@/Components/organisms/common/Navbar/types/Link";
import { getPublicImage } from "@/utils/PublicImagesUtil";
import Button from "@/Components/atoms/Button";
// import route from "ziggy-js";

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
                {NAV_LINKS_ROUTES.map(({ name: link, route: linkRoute }) => {
                    return (
                        <li key={link}>
                            <NavLink
                                title={link}
                                href={route(linkRoute)}
                                $selected={selectedPage === link}
                            >
                                {link}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            {/* <div className="actions">Test</div> */}

            <div className="actions">
                <Button variant="text">Sign Up</Button>
                <Button variant="ghost" borderSize="lg">
                    Login
                </Button>
            </div>
        </Container>
    );
}
