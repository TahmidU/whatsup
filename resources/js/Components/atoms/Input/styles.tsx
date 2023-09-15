import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    border: 1px solid ${({theme}) => theme.cColours.cMainText.alpha(0.6).toString()};
    border-radius: 0.5rem;

    &:focus-within{
        border: 1px solid ${({theme}) => theme.colours.mainText};
    }

    & > input:first-child {
        all:unset;
        height: 100%;
        width: 100%;
        font-family: ${({theme}) => theme.fontFamilies.inter};
        color: ${({theme}) => theme.colours.mainText};
        font-size: ${({theme}) => theme.fonts.md};
    }

`;
Container.displayName = "Container";

export const PasswordVisibilityBtn = styled.button<{showPassword:boolean}>`
    all:unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10;
    right: 1rem;
    margin: auto 0;
    width: 18px;
    height: 18px;

    & > svg:first-child {
            
        width: 100%;
        height: 100%;
        cursor: pointer;

        color: ${({theme, showPassword}) => showPassword ? 
            theme.colours.mainText : theme.cColours.cMainText.alpha(0.6).toString()};

        &:hover{
            color: ${({theme, showPassword}) => showPassword ? 
            theme.colours.mainText : theme.cColours.cMainText.alpha(0.8).toString()};
        }

        &:active{
            color: ${({theme}) => theme.colours.mainText};
        }
    }
`;
PasswordVisibilityBtn.displayName = "PasswordVisibilityBtn";