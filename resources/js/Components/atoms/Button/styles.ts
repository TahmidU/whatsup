import { styled } from "styled-components";

export const Container = styled.article`
    color: ${({ theme }) => {
        console.log(theme.colours.mod.CPrimary);

        const a = theme.colours.mod.CPrimary.alpha(0.5).toString();

        return a;
    }};
    font-family: ${({ theme }) => theme.fontFamilies.roboto};
`;