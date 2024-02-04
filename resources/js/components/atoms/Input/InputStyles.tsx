import styled from "styled-components";
import { PasswordVisibilityBtnStyle } from "./types/Styles";

const xPadding = "0.5rem";
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 34px;
    padding: 0.25rem ${xPadding};
    border: 1px solid
        ${({ theme }) => theme.cColours.cPrimary.lighten(0.6).toString()};
    border-radius: 0.5rem;
    box-sizing: border-box;
    cursor: text;

    background-color: ${({ theme }) =>
        theme.cColours.cPrimary.lighten(0.35).toString()};

    &:focus-within {
        border: 1px solid ${({ theme }) => theme.colours.mainText};
    }

    & > input:first-child {
        all: unset;
        height: 100%;
        width: 100%;
        font-family: ${({ theme }) => theme.fontFamilies.inter};
        color: ${({ theme }) => theme.colours.mainText};
        font-size: ${({ theme }) => theme.fonts.md};
    }
`;
InputContainer.displayName = "InputContainer";

export const PasswordVisibilityBtn = styled.button<PasswordVisibilityBtnStyle>`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10;
    right: ${xPadding};
    margin: auto 0;
    width: 18px;
    height: 18px;

    svg {
        width: 100%;
        height: 100%;
        cursor: pointer;

        color: ${({ theme, $showPassword }) =>
            $showPassword
                ? theme.colours.mainText
                : theme.cColours.cMainText.alpha(0.6).toString()};

        &:hover {
            color: ${({ theme, $showPassword }) =>
                $showPassword
                    ? theme.colours.mainText
                    : theme.cColours.cMainText.alpha(0.8).toString()};
        }

        &:active {
            color: ${({ theme }) => theme.colours.mainText};
        }
    }
`;
PasswordVisibilityBtn.displayName = "PasswordVisibilityBtn";
