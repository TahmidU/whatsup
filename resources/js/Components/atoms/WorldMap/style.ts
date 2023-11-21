import styled from "styled-components";

export const SVGContainer = styled.svg`
    .points-in {
        animation: fade-in 2.5s;

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
        animation: fade-out 2.5s;

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
`;
