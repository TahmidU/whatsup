import styled from "styled-components";
import { SimpleCardContainerStyle } from "./types/Styles";
import { PrefixObjectKeys } from "@/utils/TypeUtil";

export const SimpleCardContainer = styled.div<PrefixObjectKeys<'$',SimpleCardContainerStyle>>`
    filter: ${({$shadow}) => 
        $shadow === 'sm' ? 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))' : 
        $shadow === 'lg' ? 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))' : 
        'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))' };
    background-color: ${({theme}) => theme.colours.secondary};
    border-radius: 1rem;
    padding: 1rem;
`;
SimpleCardContainer.displayName = "SimpleCardContainer";