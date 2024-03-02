import { Link } from "@inertiajs/react";
import { ButtonDefaultStyles } from "./types/Styles";
import { css, styled } from "styled-components";

export const ActionVariant = css`
    background-color: ${({ theme }) => theme.colours.accent};

    &:hover {
        background-color: ${({ theme }) =>
            theme.cColours.cAccent.lighten(0.05).toString()};
    }
`;

export const DangerVariant = css`
    background-color: ${({ theme }) => theme.colours.danger};

    &:hover {
        background-color: ${({ theme }) =>
            theme.cColours.cDanger.lighten(0.05).toString()};
    }
`;

export const TextVariant = css`
    padding: 0.5rem 0rem;
    background-color: transparent;

    &:hover {
        background-color: transparent;
    }
`;

export const GhostVariant = (isDisabled = false) => css`
    border: ${({ theme }) => `1px solid ${theme.colours.mainText}`};
    background-color: ${({ theme }) =>
        theme.cColours.cPrimary.alpha(0.85).toString()};

    &:hover {
        background-color: ${({ theme }) =>
            !isDisabled && theme.colours.mainText};
        color: ${({ theme }) =>
            !isDisabled && theme.cColours.cMainText.negate().toString()};
    }
`;

export const LinkTextVariant = css`
    color: ${({ theme }) => theme.colours.link};
    padding: 0rem;

    &:hover {
        opacity: 80%;
    }
`;

export const ButtonDefaults = css<ButtonDefaultStyles>`
    width: fit-content;
    text-align: center;
    padding: 0.5rem 1rem;

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
`;

export const ButtonContainer = styled.button<ButtonDefaultStyles>`
    ${ButtonDefaults}
    ${({ $variant, disabled }) =>
        $variant === "action"
            ? ActionVariant
            : $variant === "danger"
            ? DangerVariant
            : $variant === "text"
            ? TextVariant
            : $variant === "ghost"
            ? GhostVariant(disabled)
            : LinkTextVariant}

    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

    &:hover {
        cursor: ${({ disabled }) => disabled && "not-allowed"};
    }
`;
ButtonContainer.displayName = "ButtonContainer";

export const LinkContainer = styled(Link)<ButtonDefaultStyles>`
    ${ButtonDefaults}
    ${({ $variant }) =>
        $variant === "action"
            ? ActionVariant
            : $variant === "danger"
            ? DangerVariant
            : $variant === "text"
            ? TextVariant
            : $variant === "ghost"
            ? GhostVariant()
            : LinkTextVariant}
`;
LinkContainer.displayName = "LinkContainer";
