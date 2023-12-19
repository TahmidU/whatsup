import { FeatureSlideContainerInterface } from "@/Components/organisms/home/FeatureSlide/types/Style";
import styled from "styled-components";

export const FeatureSlideContainer = styled.div<FeatureSlideContainerInterface>`
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    justify-content: space-between;

    .feature-slide-buttons {
        grid-area: buttons;
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        max-width: 35%;

        > button {
            max-height: 115px;
            padding: 1rem 1rem 0 1rem;
        }
    }

    .feature-slide-preview {
        grid-area: previews;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 592px;
        height: 522px;
        justify-self: flex-end;

        img {
            --normal-height: ${({ $previewImgHeight }) => $previewImgHeight};
            --normal-width: ${({ $previewImgWidth }) => $previewImgWidth};
            --magnify: 1;

            width: 100%;
            height: 100%;
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
            font-size: ${({ theme }) => theme.fonts.md};
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
