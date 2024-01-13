import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) =>
        theme.cColours.cPrimary.lighten(0.25).toString()};
    border-radius: 1rem;
    padding: 1rem;
    color: ${({ theme }) => theme.colours.mainText};

    header {
    }

    footer {
    }
`;
CardContainer.displayName = "CardContainer";
