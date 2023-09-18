import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.15rem;
    font-size: ${({theme}) => theme.fonts.md};
    font-family: ${({theme}) => theme.fontFamilies.inter};
    color: ${({theme}) => theme.colours.mainText};

    label{
        user-select: none;
        cursor: pointer;
    }
`;
CheckboxContainer.displayName = "Container";

export const Toggle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-left: 0.25rem;
    height: 1rem;
    width: 1rem;
    border: 1px solid ${({theme}) => theme.colours.mainText};
    border-radius: 0.25rem;
    cursor: pointer;
    background-color: ${({theme}) => theme.colours.secondary};

    input{
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
    }

    input[type='checkbox']:checked + svg{
        opacity: 1;
    }

    input[type='checkbox']:not(:checked) + svg{
        opacity: 0;
    }

    svg{
        width: 80%;
        height: 80%;
    }
`;
Toggle.displayName = "Toggle"