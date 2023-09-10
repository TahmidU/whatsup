import { styled } from "styled-components";
import { NormalButtonType } from "./Button";

export const NormalBtnContainer = styled.button<Pick<NormalButtonType, "borderSize" | "type">>`
    border-radius: ${({borderSize}) => 
        borderSize === 'lg' ? '0.5rem' : 
        borderSize === 'md' ? '0.25rem' : '0.125rem'};
    
    background-color: ${({type, theme}) => 
        type === 'action' ? theme.colours.accent : theme.colours.danger};

    color: ${({theme}) => theme.colours.mainText};

`;
NormalBtnContainer.displayName = "NormalBtnContainer";
