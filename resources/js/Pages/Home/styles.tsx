import styled from "styled-components";

export const HomePageContainer = styled.div`
    /* max-height: calc(100vh - 72px); */
    display: block;

    margin: 5rem 0 0 0;
    justify-content: center;
    background-color: ${({ theme }) => theme.colours.primary};
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fontFamilies.inter};
`;
HomePageContainer.displayName = "HomePageContainer";

export const Hero = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 72px);

    .hero-intro {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 100;

        header {
            text-align: center;

            h1 {
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

        footer {
            position: relative;

            width: 90rem;
            height: 64.25rem;

            .preview-border-animation {
                --border-size: 2px;
                --border-angle: 0turn;

                border-radius: 0.5rem;
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                background-image: conic-gradient(
                    from var(--border-angle),
                    transparent 90%,
                    #f03
                );

                -webkit-mask-image: linear-gradient(
                        to top,
                        black,
                        transparent 1%,
                        transparent 90%,
                        transparent 99%,
                        black
                    ),
                    linear-gradient(
                        to left,
                        black,
                        transparent 1%,
                        transparent 90%,
                        transparent 99%,
                        black
                    );
                -webkit-mask-repeat: no-repeat;

                animation: bg-spin 8s linear infinite;
                @keyframes bg-spin {
                    to {
                        --border-angle: 1turn;
                    }
                }

                @property --border-angle {
                    syntax: "<angle>";
                    inherits: true;
                    initial-value: 0turn;
                }
            }

            .preview-container {
                position: absolute;
                z-index: 200;
                padding: 0.1rem;

                -webkit-mask-image: linear-gradient(
                    to bottom,
                    black 15%,
                    transparent 60%,
                    transparent 80%
                );
                mask-image: linear-gradient(
                    to bottom,
                    black 15%,
                    transparent 60%,
                    transparent 80%
                );

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 0.5rem;
                    border: 1px solid
                        ${({ theme }) =>
                            theme.cColours.cPrimary.lighten(0.2).toString()};
                }
            }
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
        z-index: 0;

        svg {
            transform: scale(1);
        }
    }
`;
Hero.displayName = "Hero";
