import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 35rem;
    height: 30rem;
    background-color: ${({theme}) => theme.colours.secondary};
    border-radius: 1rem;
`;
Container.displayName = "Container";

export const Header = styled.header`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;

    .logo-container{
        width: 3rem;
        height: 3rem;

        > img {
            width: 100%;
            height: 100%
        }
    }

    .welcome-segment{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem;
        align-items: center;
        color: ${({theme}) => theme.colours.mainText};
        font-family: ${({theme}) => theme.fontFamilies.inter};

        > span:first-child {
            font-weight: 600;
            font-size: ${({theme}) => theme.fonts["2xl"]};
        }

        > span:last-child {
            font-size: ${({theme}) => theme.fonts.sm};
            color: ${({theme}) => theme.colours.mainText};
            font-weight: 200;
        }
    }

`;
Header.displayName = "Header";

export const Form = styled.form`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 60%;

    .login-main-segment{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        width: 100%;
        margin: 1rem 0;
    }

    .login-typed-inputs{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;
    }

    .login-main-options{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

`;
Form.displayName = "Form";

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({theme}) => theme.fonts.sm};
    color: ${({theme}) => theme.colours.mainText};
    font-family: ${({theme}) => theme.fontFamilies.inter};

    font-weight: 100;

    & > span:first-child{
        & > a{
            font-weight: bold;
        }
    }
`;
Footer.displayName = 'Footer';
