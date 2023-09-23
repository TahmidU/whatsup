import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colours.primary};
    width: 100%;
    height: 100%;
`;
