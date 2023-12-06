import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 72px);
    max-height: calc(100vh - 72px);
    display: flex;
    margin: 5rem 0 0 0;
    justify-content: center;
    background-color: ${({ theme }) => theme.colours.primary};
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fontFamilies.inter};
`;
Container.displayName = "Container";

export const Hero = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;

    header {
        position: absolute;
        z-index: 100;
        text-align: center;

        .hero-title {
            position: relative;

            p {
                font-size: ${({ theme }) => theme.fonts["6xl"]};
                line-height: normal;
                margin: 0;
                text-shadow: 0px 0px 40px
                    ${({ theme }) =>
                        theme.cColours.cAccent.alpha(0.2).toString()};
            }

            & > p:first-child {
                color: ${({ theme }) => theme.colours.mainText};
            }

            & > p:nth-child(2) {
                color: ${({ theme }) => theme.colours.accent};
            }
        }

        h2 {
            color: ${({ theme }) => theme.colours.mainText};
            font-weight: 400;
            margin-bottom: 4rem;
        }

        button {
            width: 124px;
            padding: 0.35rem 0.75rem;
            font-size: ${({ theme }) => theme.fonts.md};
        }
    }

    .hero-background {
        position: absolute;
        display: flex;
        align-items: start;
        justify-content: start;
        opacity: 0.35;
        width: 100%;
        max-width: calc(1440px * 1.4);

        svg {
            transform: scale(1);
        }
    }
`;
Hero.displayName = "Hero";
