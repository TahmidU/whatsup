import { FeatureSlideContainerInterface } from "@/Components/organisms/home/FeatureSlide/types/Style";
import styled from "styled-components";

export const FeatureSlideContainer = styled.div<FeatureSlideContainerInterface>`
    display: grid;
    grid-template-columns: 35% 20% 35%;
    grid-template-areas: "buttons . previews";
    /* column-gap: 2rem; */
    grid-auto-flow: row;

    .feature-slide-buttons {
        grid-area: buttons;
        display: flex;
        flex-direction: column;
        row-gap: 2rem;

        > button {
            max-height: 115px;
            padding: 1rem 0.5rem 0 0.5rem;
        }
    }

    .feature-slide-preview {
        grid-area: previews;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            --normal-height: ${({ $previewImgHeight }) => $previewImgHeight};
            --normal-width: ${({ $previewImgWidth }) => $previewImgWidth};
            --magnify: 1;

            min-height: calc(var(--normal-height) * var(--magnify));
            min-width: calc(var(--normal-width) * var(--magnify));
            max-height: calc(var(--normal-height) * var(--magnify));
            max-width: calc(var(--normal-width) * var(--magnify));
        }

        p {
            margin-top: 2rem;
            padding: 0 1rem;
            width: 100%;
            color: ${({ theme }) => theme.colours.mainText};
            text-align: center;
            font-weight: 200;
            font-size: ${({ theme }) => theme.fonts.sm};
        }

        animation-name: appear;
        animation-duration: 500ms;
        animation-timing-function: ease-in;

        @keyframes appear {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
    }
`;
FeatureSlideContainer.displayName = "FeatureSlideContainer";
