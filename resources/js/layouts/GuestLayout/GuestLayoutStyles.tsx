import styled from "styled-components";

export const GuestLayoutContainer = styled.div`
    /* --navbar-height: 72px; */

    /* min-height: 100vh;
    height: auto;
    width: 100%;
    background-color: ${({ theme }) => theme.colours.primary};

    .guest-children-container {
        margin: 0 auto;
        max-width: 2048px;
    } */
`;
GuestLayoutContainer.displayName = "GuestLayoutContainer";

export const Footer = styled.div`
    /* display: flex;
    flex-direction: row;
    column-gap: 10rem;
    height: 100%;
    background-color: ${({ theme }) =>
        theme.cColours.cPrimary.lighten(0.2).toString()};
    padding: 4rem 10rem 10rem 10rem;
    max-width: 2048px;
    width: 100%; */

    .footer-intro {
        /* display: flex;
        flex-direction: column;
        row-gap: 1rem; */

        .footer-logo {
            /* width: 3.125rem;
            height: 3.125rem;

            svg {
                width: 100%;
                height: 100%;
            } */
        }

        .footer-social-logos {
            /* display: flex;
            flex-direction: row;
            column-gap: 0.75rem;

            svg {
                color: ${({ theme }) => theme.colours.mainText};
            } */
        }

        .footer-copyright {
            /* margin-top: 1rem;
            font-size: ${({ theme }) => theme.fonts.sm};
            color: ${({ theme }) =>
                theme.cColours.cMainText.darken(0.6).toString()}; */
        }
    }

    .footer-options {
        /* display: grid;
        width: 100%;
        grid-template-columns: repeat(4, minmax(120px, 1fr));
        color: ${({ theme }) => theme.colours.mainText};

        ul {
            padding: 0;
            display: flex;
            flex-direction: column;
            row-gap: 0.5rem;
            list-style-type: none;

            li {
                font-size: ${({ theme }) => theme.fonts.md};
                cursor: pointer;
                opacity: 0.8;

                &:hover {
                    opacity: 1;
                }
            }
        } */
    }
`;
Footer.displayName = "Footer";
