import styled from "styled-components";

export const GuestLayoutContainer = styled.div`
    min-height: 100vh;
    height: auto;
    width: 100%;
    background-color: ${({ theme }) => theme.colours.primary};

    .guest-children-container {
        margin: 0 auto;
        max-width: 2048px;
    }
`;
GuestLayoutContainer.displayName = "GuestLayoutContainer";
