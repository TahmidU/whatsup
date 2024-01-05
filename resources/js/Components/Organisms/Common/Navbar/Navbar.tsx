import { NAV_LINKS_ROUTES } from "@/Components/Organisms/Common/Navbar/constants/Links";
import { NavBarContainer, NavLink } from "./NavbarStyles";
import { getPublicImage } from "@/utils/PublicImagesUtil";
import Button from "@/Components/Atoms/Buttons/Button";
import { usePage } from "@inertiajs/react";
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
                <Button $variant="text">Sign Up</Button>
                <Button $variant="ghost" $borderSize="lg">
                    Login
                </Button>
            </div>
        </NavBarContainer>
    );
}
