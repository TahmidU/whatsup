import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colours.primary};
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
        display: flex;
        justify-content: center;
        opacity: 0.35;
        width: 100%;
    }
`;
Hero.displayName = "Hero";
