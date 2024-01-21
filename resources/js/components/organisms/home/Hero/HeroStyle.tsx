import styled from "styled-components";

const PAGE_TOP_MARGIN = "5rem";
export const HeroContainer = styled.div`
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
HeroContainer.displayName = "HeroContainer";
