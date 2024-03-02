import { NAV_LINKS_ROUTES } from "@/components/organisms/common/Navbar/constants/Links";
import { NavBarContainer, NavLink } from "./NavbarStyles";
import { getPublicImage } from "@/utils/PublicImagesUtil";
import Button from "@/components/atoms/buttons/Button";
import useSwappablePage from "@/hooks/useSwappablePage";

export default function Navbar() {
    const componentPage = useSwappablePage().component;

    return (
        <NavBarContainer>
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
                                preserveScroll
                                preserveState
                                title={link}
                                href={route(linkRoute)}
                                $selected={componentPage === link}
                            >
                                {link}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            <div className="actions">
                <Button as="link" href={route("register.show")} $variant="text">
                    Sign Up
                </Button>
                <Button
                    as="link"
                    href={route("auth.show")}
                    $variant="ghost"
                    $borderSize="lg"
                >
                    Login
                </Button>
            </div>
        </NavBarContainer>
    );
}
