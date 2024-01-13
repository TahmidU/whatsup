import styled from "styled-components";

export const RegisterContainer = styled.div`
    min-height: calc(100vh - 72px);
    max-height: calc(100vh - 72px);
    display: flex;
    margin: 5rem 0 0 0;
    justify-content: center;
    background-color: ${({ theme }) => theme.colours.primary};
    width: 100%;
    height: 100%;
`;
RegisterContainer.displayName = "RegisterContainer";
