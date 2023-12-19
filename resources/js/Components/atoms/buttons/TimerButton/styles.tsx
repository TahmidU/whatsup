import { TimerButtonContainerInterface } from "@/Components/atoms/buttons/TimerButton/types/Styles";
import styled from "styled-components";

export const TimerButtonContainer = styled.button.withConfig({
    shouldForwardProp: (prop) => {
        const PROPS = ["animstate", "time"];
        return !PROPS.includes(prop);
    },
})<TimerButtonContainerInterface>`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 1rem 0.25rem 0 0.25rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colours.mainText};

    --active-color: ${({ theme }) =>
        theme.cColours.cPrimary.lighten(0.25).toString()};

    background-color: ${({ animstate }) =>
        animstate === "play" ? "var(--active-color)" : "transparent"};

    &:hover {
        background-color: var(--active-color);

        .timer-button-timer {
            animation-play-state: paused;
        }
    }

    .timer-button-timer {
        ${({ animstate, theme }) => {
            if (animstate === "play") {
                return `animation-play-state: running;
                        background-color: ${theme.colours.accent};`;
            }

            if (animstate === "stop") {
                return `animation-play-state: paused;
                        background-color: transparent;`;
            }

            if (animstate === "pause") {
                return `animation-play-state: paused;
                        background-color: ${theme.colours.accent};`;
            }
        }}

        height: 2px;

        animation-name: buttontimer;
        animation-iteration-count: infinite;
        animation-duration: ${({ time }) => `${time}s`};
        animation-timing-function: linear;

        @keyframes buttontimer {
            from {
                width: 0%;
            }

            to {
                width: 100%;
            }
        }
    }
`;
TimerButtonContainer.displayName = "TimerButtonContainer";
