import styled from "styled-components";

export const Container = styled.div`
    display: block;
    margin: auto;
    background-color: ${({theme}) => theme.colours.primary};
    width: 100%;
    height: 100%;
`;
