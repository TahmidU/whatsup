import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 5rem 0 0 0;
    justify-content: center;
    background-color: ${({ theme }) => theme.colours.primary};
    width: 100%;
    height: 100%;
`;
