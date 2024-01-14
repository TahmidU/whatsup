import styled from "styled-components";

export const RegisterContainer = styled.div`
    min-height: calc(100vh);
    max-height: calc(100vh);
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colours.primary};
    width: 100%;
    height: 100%;
`;
RegisterContainer.displayName = "RegisterContainer";
