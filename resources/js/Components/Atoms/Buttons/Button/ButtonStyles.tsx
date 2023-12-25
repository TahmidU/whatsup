import { Link } from "@inertiajs/react";
import { ButtonDefaultStyles } from "./types/Styles";
import { css, styled } from "styled-components";

export const ButtonDefaults = css<ButtonDefaultStyles>`
    width: fit-content;
    text-align: center;
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
    color: ${({ theme }) => theme.colours.mainText};

    background-color: ${({ $variant, theme }) =>
        $variant === "action"
            ? theme.colours.accent
            : $variant === "danger"
            ? theme.colours.danger
            : $variant === "ghost"
            ? theme.cColours.cPrimary.alpha(0.85).toString()
            : "transparent"};

    &:hover {
        background-color: ${({ $variant, theme }) =>
            $variant === "action"
                ? theme.cColours.cAccent.lighten(0.05).toString()
                : $variant === "danger"
                ? theme.cColours.cDanger.lighten(0.05).toString()
                : $variant === "ghost"
                ? theme.colours.mainText
                : "transparent"};

        color: ${({ $variant, theme }) =>
            $variant === "ghost" &&
            theme.cColours.cMainText.negate().toString()};

        font-weight: ${({ $variant }) => $variant === "text" && "500"};
    }
`;

export const ButtonContainer = styled.button<ButtonDefaultStyles>`
    ${ButtonDefaults}

    background-color: ${({ $variant, theme, disabled }) =>
        $variant === "action"
            ? theme.cColours.cAccent.darken(disabled ? 0.5 : 0).toString()
            : $variant === "danger"
            ? theme.cColours.cDanger.darken(disabled ? 0.5 : 0).toString()
            : $variant === "ghost"
            ? theme.cColours.cPrimary.alpha(0.85).toString()
            : "transparent"};

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

export const LinkContainer = styled(Link)<ButtonDefaultStyles>`
    ${ButtonDefaults}
`;
LinkContainer.displayName = "LinkContainer";
