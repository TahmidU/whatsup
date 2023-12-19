import styled from "styled-components";

export const FeatureSlideContainer = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
    grid-auto-flow: row;

    .feature-slide-buttons {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;

        > button {
            max-height: 115px;
        }
    }
`;
FeatureSlideContainer.displayName = "FeatureSlideContainer";
