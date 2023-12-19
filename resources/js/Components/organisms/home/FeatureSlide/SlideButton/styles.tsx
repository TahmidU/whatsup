import TimerButton from "@/Components/atoms/buttons/TimerButton";
import styled, { ThemeContext } from "styled-components";

export const SlideButtonContainer = styled(TimerButton)`
    .slide-button-content {
        display: grid;
        grid-template-columns: 7% auto;
        grid-template-rows: 40% auto;
        grid-auto-flow: row;
        grid-template-areas: "iconimg title" ". info";
        grid-row-gap: 0.625rem;
        grid-column-gap: 0.5rem;
        width: 100%;
        height: 100%;

        .slide-button-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            grid-area: iconimg;
            position: relative;
            align-self: center;
            width: 42px;
            height: 42px;
            min-height: 42px;
            min-width: 42px;
            justify-self: center;

            --box-radius: 0.5rem;

            &::before {
                position: absolute;
                z-index: 1;
                content: "";
                width: 100%;
                height: 100%;

                background-color: ${({ theme }) => theme.colours.accent};

                border-radius: var(--box-radius);
                opacity: 15%;
            }

            &::after {
                position: absolute;
                z-index: 2;
                content: "";
                width: 85%;
                height: 85%;

                background-color: ${({ theme }) => theme.colours.accent};

                border-radius: var(--box-radius);
                opacity: 30%;
            }

            img {
                --img-padding: 0.2rem;

                position: relative;
                z-index: 3;

                min-width: 1.625rem;
                max-width: 1.625rem;
                min-height: 1.625rem;
                max-height: 1.625rem;

                background-color: ${({ theme }) =>
                    theme.cColours.cAccent.darken(0.1).toString()};

                padding: var(--img-padding);
                border-radius: calc(var(--box-radius) - var(--img-padding));
            }
        }

        h2 {
            grid-area: title;
            justify-self: flex-start;
            align-self: center;
            margin: 0rem;
        }

        p {
            grid-area: info;
            justify-self: flex-start;
            align-self: flex-start;
            font-size: ${({ theme }) => theme.fonts.md};
            margin: 0 0 1.625rem 0;
            font-weight: 300;
            padding: 0 1rem 0 0;
            text-align: start;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
    }
`;
SlideButtonContainer.displayName = "SlideButtonContainer";
