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
    }
`;

export const ButtonContainer = styled.button<ButtonDefaultStyles>`
    ${ButtonDefaults}

    background-color: ${({ $variant, theme }) =>
        $variant === "action"
            ? theme.cColours.cAccent.toString()
            : $variant === "danger"
            ? theme.cColours.cDanger.toString()
            : $variant === "ghost"
            ? theme.cColours.cPrimary.alpha(0.85).toString()
            : "transparent"};

    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

    &:hover {
        cursor: ${({ disabled }) => disabled && "not-allowed"};

        background-color: ${({ $variant, theme }) =>
            $variant === "action"
                ? theme.cColours.cAccent.lighten(0.05).toString()
                : $variant === "danger"
                ? theme.cColours.cDanger.lighten(0.05).toString()
                : $variant === "ghost"
                ? theme.colours.mainText
                : "transparent"};

        color: ${({ $variant, theme, disabled }) =>
            !disabled &&
            $variant === "ghost" &&
            theme.cColours.cMainText.negate().toString()};
    }
`;
ButtonContainer.displayName = "ButtonContainer";

export const LinkContainer = styled(Link)<ButtonDefaultStyles>`
    ${ButtonDefaults}
`;
LinkContainer.displayName = "LinkContainer";
