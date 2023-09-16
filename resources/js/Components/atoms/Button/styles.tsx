import { styled } from "styled-components";
import { ButtonStyle } from "./Button";
import { PrefixKey, PrefixObjectKeys } from "@/utils/TypeUtil";

export const ButtonDefaults = styled.button`
    all:unset;
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
`;
ButtonDefaults.displayName = "ButtonDefaults";

type ButtonContainerType = PrefixObjectKeys<'$', Pick<ButtonStyle, 'borderSize' | 'buttonType'>> ;
export const ButtonContainer = styled(ButtonDefaults)<ButtonContainerType>`
    padding: 0.5rem 1rem;
    border-radius: ${({$borderSize}) => 
        $borderSize === 'lg' ? '0.5rem' : 
        $borderSize === 'md' ? '0.25rem' : '0.125rem'};
    font-family: ${({theme}) => theme.fontFamilies.inter};
    background-color: ${({$buttonType, theme}) => 
        $buttonType === 'action' ? theme.colours.accent : theme.colours.danger};
    color: ${({theme}) => theme.colours.mainText};
`;
ButtonContainer.displayName = "NormalBtnContainer";
