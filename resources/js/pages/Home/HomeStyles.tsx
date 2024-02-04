import styled from "styled-components";

const PAGE_TOP_MARGIN = "5rem";
export const HomePageContainer = styled.div`
    display: block;
    margin: ${PAGE_TOP_MARGIN} 0 0 0;
    justify-content: center;
    background-color: ${({ theme }) => theme.colours.primary};
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fontFamilies.inter};

    .common-intro {
        text-align: center;
        margin-top: 4rem;

        h1 {
            font-size: ${({ theme }) => theme.fonts["4xl"]};
            line-height: normal;
            margin: 0;
            text-shadow: 0px 0px 40px
                ${({ theme }) => theme.cColours.cAccent.alpha(0.2).toString()};
            color: ${({ theme }) => theme.colours.mainText};
        }

        span {
            color: ${({ theme }) => theme.colours.success};
        }

        h4 {
            color: ${({ theme }) => theme.colours.mainText};
            font-weight: 400;
            margin-bottom: 2rem;
            max-width: 954px;
        }

        button {
            width: fit-content;
            padding: 0.5rem 1rem;
            font-size: ${({ theme }) => theme.fonts.md};
        }
    }
`;
HomePageContainer.displayName = "HomePageContainer";
