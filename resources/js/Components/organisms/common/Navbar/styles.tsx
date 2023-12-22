import { NavLinkStyleTransient } from "@/Components/organisms/common/Navbar/types/Styles";
import { REMOVE_LINK_STYLE, REMOVE_LIST_STYLE } from "@/constants/Styles";
import { Link } from "@inertiajs/react";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: var(--navbar-height);
    background: ${({ theme }) => theme.colours.primary};
    padding: 0 3rem;
    box-sizing: border-box;

    .logo {
        width: 10rem;
        height: 2rem;

        > img {
            width: 2rem;
            height: 2rem;
        }
    }

    .nav-list {
        ${REMOVE_LIST_STYLE};
        display: flex;
        width: fit-content;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;
        padding: 0;
        /* padding-left: 8.25rem; */

        li {
            font-size: ${({ theme }) => theme.fonts.md};
            font-family: ${({ theme }) => theme.fontFamilies.inter};
        }
    }

    .actions {
        display: flex;
        align-items: center;
        width: 10rem;
        gap: 1rem;
        font-size: ${({ theme }) => theme.fonts.md};

        button {
            width: fit-content;
        }
    }
`;
NavBarContainer.displayName = "NavBarContainer";

export const NavLink = styled(Link)<NavLinkStyleTransient>`
    ${REMOVE_LINK_STYLE};
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-weight: ${({ $selected }) => ($selected ? "bold" : "300")};
    color: ${({ theme }) => theme.colours.mainText};

    &::after {
        content: "";
        visibility: ${({ $selected }) => ($selected ? "visible" : "hidden")};
        width: 35%;
        margin: 0 auto;
        border: 1px solid ${({ theme }) => theme.colours.mainText};
        transition: width 0.35s;
    }

    &:hover {
        &::after {
            visibility: visible;
            width: 100%;
        }
    }
`;
