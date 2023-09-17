
import { Link } from "@inertiajs/react";
import styled from "styled-components";

export const LinkButtonContainer = styled(Link)`
    font-family: ${({theme}) => theme.fontFamilies.inter};
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    color: ${({theme}) => theme.colours.mainText};

    &:hover{
        text-decoration: underline;
    }
`;
LinkButtonContainer.displayName = 'LinkButtonContainer';