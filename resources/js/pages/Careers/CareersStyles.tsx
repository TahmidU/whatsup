import styled from "styled-components";

export const CareersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 72px);

    h1 {
        width: fit-content;
        color: ${({ theme }) => theme.colours.mainText};
        font-size: ${({ theme }) => theme.fonts["6xl"]};
    }
`;
CareersContainer.displayName = "CareersContainer";
