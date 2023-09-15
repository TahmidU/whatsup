import Button from "@/Components/atoms/Button";
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

    // Logo
    > div:first-child{
        width: 3rem;
        height: 3rem;

        > img {
            width: 100%;
            height: 100%
        }
    }

    // Welcome Message
    > section:last-child{
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 40%;
`;
Form.displayName = "Form";

export const LoginButton = styled(Button)`
    text-align: center;
    width: 100%;
`;
LoginButton.displayName = "LoginButton";

export const Footer = styled.footer``;
Footer.displayName = 'Footer';
