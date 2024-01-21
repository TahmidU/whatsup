import styled from "styled-components";

export const FinalPromptContainer = styled.section`
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

        h4 {
            opacity: 0.8;
            padding: 0 8rem;
        }
    }
`;
FinalPromptContainer.displayName = "FinalPromptContainer";
