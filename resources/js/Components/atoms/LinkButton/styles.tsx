
import { Link } from "@inertiajs/react";
import styled from "styled-components";

export const LinkButtonContainer = styled(Link)`
    font-family: ${({theme}) => theme.fontFamilies.inter};
    font-weight: 100;
    cursor: pointer;
    text-decoration: none;
    color: ${({theme}) => theme.colours.mainText};
    font-size: ${({theme}) => theme.fonts.sm};

    &:hover{
        text-decoration: underline;
        font-weight: 200;
    }
`;
LinkButtonContainer.displayName = 'LinkButtonContainer';