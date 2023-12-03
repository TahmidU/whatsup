import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colours.primary};
`;
Container.displayName = "Container";
