import styled from "styled-components";

export const SVGContainer = styled.svg`
    .points-in {
        -webkit-animation: fade-in 5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fade-in 5s; /* Firefox < 16 */
        -ms-animation: fade-in 5s; /* Internet Explorer */
        -o-animation: fade-in 5s; /* Opera < 12.1 */
        animation: fade-in 5s;

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

    .points-out {
        -webkit-animation: fade-out 5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fade-out 5s; /* Firefox < 16 */
        -ms-animation: fade-out 5s; /* Internet Explorer */
        -o-animation: fade-out 5s; /* Opera < 12.1 */
        animation: fade-out 5s;

        @keyframes fade-out {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    }
`;
