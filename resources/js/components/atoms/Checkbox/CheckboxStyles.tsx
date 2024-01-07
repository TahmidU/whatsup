import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 0.75rem;
    width: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colours.mainText};
    border-radius: 0.25rem;
    cursor: pointer;
    overflow: hidden;

    background-color: ${({ theme }) => theme.colours.mainText};

    &:has(input[type="checkbox"]:not(:checked)) {
        background-color: ${({ theme }) => theme.colours.primary};
    }

    &:has(input[type="checkbox"]:checked) {
        background-color: ${({ theme }) => theme.colours.mainText};
    }

    input {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
    }

    input[type="checkbox"]:checked + svg {
        opacity: 1;
    }

    input[type="checkbox"]:not(:checked) + svg {
        opacity: 0;
    }

    svg {
        width: 80%;
        height: 80%;
        color: ${({ theme }) => theme.colours.primary};
    }
`;
CheckboxContainer.displayName = "CheckboxContainer";
