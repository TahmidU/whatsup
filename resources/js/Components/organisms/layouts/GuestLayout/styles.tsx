import styled from "styled-components";

export const GuestLayoutContainer = styled.div`
    min-height: 100vh;
    height: auto;
    width: 100%;
    background-color: ${({ theme }) => theme.colours.primary};
`;
GuestLayoutContainer.displayName = "GuestLayoutContainer";
