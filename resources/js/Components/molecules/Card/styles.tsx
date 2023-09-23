import styled from "styled-components";
import SimpleCard from "@/Components/atoms/SimpleCard";
import { PrefixObjectKeys } from "@/utils/TypeUtil";

export const CardContainer = styled(SimpleCard)<PrefixObjectKeys<'$', CardContainerStyle>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({theme}) => theme.colours.secondary};
    border-radius: ${({$borderSize}) => 
        $borderSize === 'xl' ? '1rem' :
        $borderSize === 'lg' ? '0.5rem' : 
        $borderSize === 'md' ? '0.25rem' : '0.125rem'};
`;
CardContainer.displayName = "CardContainer";

export const Header = styled.header``;
Header.displayName = 'Header';

export const MainSegment = styled.section``;
MainSegment.displayName = "MainSegment";

export const Footer = styled.footer``;
Footer.displayName = "Footer";