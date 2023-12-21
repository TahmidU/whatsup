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
            /* min-width: 495px;
            max-width: 495px; */
            min-width: 100%;
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
        width: 600px;
        height: 600px;
        max-width: 600px;
        max-height: 600px;
        justify-self: flex-end;

        img {
            width: auto;
            height: 75%;
        }

        p {
            /* margin-top: 2rem; */
            /* margin: 0; */
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
