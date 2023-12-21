import styled from "styled-components";

export const GuestLayoutContainer = styled.div`
    --navbar-height: 72px;

    min-height: 100vh;
    height: auto;
    width: 100%;
    background-color: ${({ theme }) => theme.colours.primary};

    .guest-children-container {
        margin: 0 auto;
        max-width: 2048px;
    }
`;
GuestLayoutContainer.displayName = "GuestLayoutContainer";

export const Footer = styled.div`
    height: 100%;
    background-color: ${({ theme }) =>
        theme.cColours.cPrimary.lighten(0.2).toString()};

    .footer-logo {
        width: 3.125rem;
        height: 3.125rem;

        svg {
            width: 100%;
            height: 100%;
        }
    }
`;
Footer.displayName = "Footer";
