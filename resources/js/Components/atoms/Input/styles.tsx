import styled from "styled-components";

export const Container = styled.div`
    display:flex;

    // Input
    & > input:first-child {
        border:red;
        outline:red;
        border-width: 3px;

        &:active,&:focus{
            border:red;
            outline:red;
        }
    }
`;