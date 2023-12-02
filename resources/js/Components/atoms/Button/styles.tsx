import { ButtonContainerStyleTransient } from "./types/Styles";
import { styled } from "styled-components";

export const ButtonDefaults = styled.button`
    all: unset;
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
`;
ButtonDefaults.displayName = "ButtonDefaults";

// prettier-ignore
export const ButtonContainer = styled(ButtonDefaults)<ButtonContainerStyleTransient>`
    padding: 0.5rem 0.75rem;

    border: ${({ theme, $variant }) =>
        $variant === "ghost" && `1px solid ${theme.colours.mainText}`};

    border-radius: ${({ $borderSize }) =>
        $borderSize === "xl"
            ? "1rem"
            : $borderSize === "lg"
            ? "0.5rem"
            : $borderSize === "md"
            ? "0.25rem"
            : "0.125rem"};

    font-family: ${({ theme }) => theme.fontFamilies.inter};

    background-color: ${({ $variant, theme, disabled }) =>
        $variant === "action"
            ? theme.cColours.cAccent.darken(disabled ? 0.5 : 0).toString()
            : $variant === "danger"
            ? theme.cColours.cDanger.darken(disabled ? 0.5 : 0).toString()
            : "transparent"};

    color: ${({ theme }) => theme.colours.mainText};

    &:hover {
        cursor: ${({ disabled }) => disabled && "not-allowed"};

        background-color: ${({ disabled, $variant, theme }) =>
            !disabled
                ? $variant === "action"
                    ? theme.cColours.cAccent.lighten(0.05).toString()
                    : $variant === "danger"
                    ? theme.cColours.cDanger.lighten(0.05).toString()
                    : $variant === "ghost"
                    ? theme.colours.mainText
                    : "transparent"
                : ""};

        color: ${({ $variant, theme, disabled }) =>
            !disabled &&
            $variant === "ghost" &&
            theme.cColours.cMainText.negate().toString()};

        font-weight: ${({ $variant, disabled }) =>
            $variant === "text" && !disabled && "500"};
    }
`;
ButtonContainer.displayName = "ButtonContainer";
