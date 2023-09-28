// import { styled } from "styled-components";
import { PrefixObjectKeys } from "@/utils/TypeUtils";
import { ButtonContainerStyle } from "./types/Styles";
import styled from "styled-components";

export const ButtonDefaults = styled.button`
    all:unset;
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
`;
ButtonDefaults.displayName = "ButtonDefaults";

export const ButtonContainer = styled(ButtonDefaults)<PrefixObjectKeys<'$', ButtonContainerStyle>>`
    

    padding: 0.5rem 1rem;
    border-radius: ${({$borderSize}) => 
        $borderSize === 'xl' ? '1rem' :
        $borderSize === 'lg' ? '0.5rem' : 
        $borderSize === 'md' ? '0.25rem' : '0.125rem'};
    font-family: ${({theme}) => theme.fontFamilies.inter};
    background-color: ${({$buttonType, theme, disabled}) => 
        $buttonType === 'action' ? 
        theme.cColours.cAccent.darken(disabled ? 0.5 : 0).toString() : 
        theme.cColours.cDanger.darken(disabled ? 0.5 : 0).toString()};
    color: ${({theme}) => theme.colours.mainText};

    &:hover{
        ${({disabled, $buttonType, theme}) => !disabled && `
            background-color: ${$buttonType === 'action' ? 
            theme.cColours.cAccent.lighten(0.05).toString() : 
            theme.cColours.cDanger.lighten(0.05).toString()};`
        }
        
    }
`;
ButtonContainer.displayName = "ButtonContainer";
