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
            }

            & > p:first-child {
                color: ${({ theme }) => theme.colours.mainText};
            }

            & > p:nth-child(2) {
                color: ${({ theme }) => theme.colours.accent};
            }

            .glow {
                position: absolute;
                background-color: ${({ theme }) => theme.colours.accent};
                opacity: 0.04;
                filter: blur(32px);
                width: 100%;
                height: 100%;
                z-index: 1000;
                top: 0;
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
        filter: blur(1.25px);
        opacity: 0.5;
    }
`;
Hero.displayName = "Hero";
