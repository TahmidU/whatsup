import { styled } from "styled-components";

export const Container = styled.article`
    color: ${({ theme }) => {
        const a = theme.colours.primary;

        return a;
    }};
    font-family: ${({ theme }) => theme.fontFamilies.roboto};
`;
