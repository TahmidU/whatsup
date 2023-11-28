import styled from "styled-components";
import { SVGContainerStyleTransient } from "./types/Styles";

export const SVGContainer = styled.svg<SVGContainerStyleTransient>`
    .points-in {
        animation: fade-in
            ${({ $selectionInterval }) => `${$selectionInterval}s`};

        fill: white;

        @keyframes fade-in {
            from {
                fill: transparent;
                opacity: 0;
            }
            to {
                fill: white;
                opacity: 1;
            }
        }
    }

    .points-out {
        animation: fade-out
            ${({ $selectionInterval }) => `${$selectionInterval}s`};

        fill: transparent;

        @keyframes fade-out {
            from {
                fill: white;
                opacity: 1;
            }
            to {
                fill: transparent;
                opacity: 0;
            }
        }
    }

    .background {
        fill: ${({ theme }) => theme.colours.primary};
    }

    .inactive {
        fill: ${({ theme }) =>
            theme.current === "dark"
                ? theme.cColours.cPrimary.lighten(0.3).toString()
                : theme.colours.primary};
    }
`;
