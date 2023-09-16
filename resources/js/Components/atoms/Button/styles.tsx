import { styled } from "styled-components";
import { NormalButtonVariant } from "./Button";

export const ButtonDefaults = styled.button`
    all:unset;
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
`;
ButtonDefaults.displayName = "ButtonDefaults";

export const NormalBtnContainer = styled(ButtonDefaults)<Pick<NormalButtonVariant, "borderSize" | "type">>`
    padding: 0.5rem 1rem;
    border-radius: ${({borderSize}) => 
        borderSize === 'lg' ? '0.5rem' : 
        borderSize === 'md' ? '0.25rem' : '0.125rem'};
    font-family: ${({theme}) => theme.fontFamilies.inter};
    background-color: ${({type, theme}) => 
        type === 'action' ? theme.colours.accent : theme.colours.danger};
    border-radius: 1rem;
    color: ${({theme}) => theme.colours.mainText};
`;
NormalBtnContainer.displayName = "NormalBtnContainer";
