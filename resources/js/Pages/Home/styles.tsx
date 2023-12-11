import styled from "styled-components";

export const HomePageContainer = styled.div`
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
        height: fit-content;

        header {
            text-align: center;
            z-index: 1;

            h1 {
                font-size: ${({ theme }) => theme.fonts["6xl"]};
                line-height: normal;
                margin: 0;
                text-shadow: 0px 0px 40px
                    ${({ theme }) =>
                        theme.cColours.cAccent.alpha(0.2).toString()};
                color: ${({ theme }) => theme.colours.mainText};
            }

            span {
                color: ${({ theme }) => theme.colours.accent};
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

                @property --border-angle {
                    syntax: "<angle>";
                    inherits: true;
                    initial-value: 0turn;
                }
            }

            .preview-container {
                --img-padding: 0.15rem;

                overflow: hidden;
                padding: var(--img-padding);
                border-radius: calc(
                    var(--preview-border-radius) + (var(--img-padding) * 2)
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

export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 4rem;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    .feature-intro {
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
        }

        button {
            width: 154px;
            padding: 0.35rem 0.75rem;
            font-size: ${({ theme }) => theme.fonts.md};
        }
    }
`;
Feature.displayName = "Feature";
