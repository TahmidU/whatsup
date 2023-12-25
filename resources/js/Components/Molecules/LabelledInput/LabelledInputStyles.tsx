import styled from "styled-components";

export const Container = styled.section`
    display: block;
    width: 100%;

    & > label:first-child{
        display: block;
        font-family: ${({theme}) => theme.fontFamilies.inter};
        color: ${({theme}) => theme.colours.mainText};
        margin-bottom: 0.25rem;
        font-size: ${({theme}) => theme.fonts.sm};
    }
`;
Container.displayName = "Container";