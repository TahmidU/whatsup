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
            color: ${({ theme }) => theme.colours.accent};
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

export const Hero = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - var(--navbar-height) - ${PAGE_TOP_MARGIN});

    .hero-intro {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        flex-grow: 1;

        header {
            z-index: 1;

            h1 {
                font-size: ${({ theme }) => theme.fonts["6xl"]};
            }

            h2 {
                color: ${({ theme }) => theme.colours.mainText};
                font-weight: 400;
                margin-bottom: 3rem;
            }
        }

        footer {
            display: flex;
            flex-direction: column;
            height: 100%;
            flex-grow: 1;

            .preview-opacity-gradient {
                --preview-border-radius: 0.5rem;

                position: relative;
                width: 90rem;
                max-height: 64.25rem;

                mask-image: linear-gradient(
                    to bottom,
                    black 50%,
                    transparent 80%,
                    transparent 100%
                );

                .preview-border-animation {
                    --border-size: 2px;
                    --border-angle: 0turn;

                    @property --border-angle {
                        syntax: "<angle>";
                        inherits: true;
                        initial-value: 0turn;
                    }

                    border-radius: var(--preview-border-radius);

                    background-image: conic-gradient(
                        from var(--border-angle),
                        transparent 75%,
                        ${({ theme }) => theme.colours.accent}
                    );

                    animation: bg-spin 8s linear infinite;

                    @keyframes bg-spin {
                        to {
                            --border-angle: 1turn;
                        }
                    }

                    .preview-container {
                        --img-padding: 0.15rem;

                        overflow: hidden;
                        padding: var(--img-padding);
                        border-radius: calc(
                            var(--preview-border-radius) +
                                (var(--img-padding) * 2)
                        );
                        width: 1440px;
                        height: 594px;

                        img {
                            width: 100%;
                            height: 1024px;
                        }
                    }
                }
            }

            .scroll-down {
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: 0.25rem;
                opacity: 0.5;
                color: ${({ theme }) => theme.colours.mainText};
                font-size: ${({ theme }) => theme.fonts.lg};
                text-transform: uppercase;
                font-weight: 600;

                &:hover {
                    opacity: 1;
                }

                svg {
                    width: 2.625rem;
                    height: 2.625rem;
                }

                @media only screen and (max-height: 1000px) {
                    display: none;
                }
            }
        }
    }

    .hero-background {
        position: absolute;
        top: 0;
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

export const Feature = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10rem;
    width: 100%;
    height: 100%;
    min-height: 100vh;
`;
Feature.displayName = "Feature";

export const FinalPrompt = styled.section`
    min-height: 50vh;

    header {
        padding: 2.5rem 3.5rem;
        border-radius: 1rem;
        background-color: ${({ theme }) =>
            theme.cColours.cPrimary.lighten(0.4).alpha(0.5).toString()};
        width: fit-content;
        margin: auto;

        border: 1px solid
            ${({ theme }) => theme.cColours.cPrimary.lighten(0.8).toString()};
    }
`;
FinalPrompt.displayName = "FinalPrompt";
