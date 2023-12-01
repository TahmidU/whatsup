import { NavLinkStyleTransient } from "@/Components/organisms/common/Navbar/types/Styles";
import { REMOVE_LINK_STYLE, REMOVE_LIST_STYLE } from "@/constants/Styles";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 72px;
    background: ${({ theme }) => theme.colours.primary};

    .logo {
        margin: 0 0 0 2rem;
        width: 2rem;
        height: 2rem;

        > img {
            width: 100%;
            height: 100%;
        }
    }

    .nav-list {
        ${REMOVE_LIST_STYLE};
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;

        li {
            font-size: ${({ theme }) => theme.fonts.md};
            font-family: ${({ theme }) => theme.fontFamilies.inter};
        }
    }

    .actions {
        margin: 0 2rem 0 0;
    }
`;
Container.displayName = "Container";

export const NavLink = styled.a<NavLinkStyleTransient>`
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
