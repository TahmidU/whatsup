import RegisterForm from "@/components/organisms/register/RegisterForm";
import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    min-height: calc(100vh);
    max-height: calc(100vh);
    height: 100%;
    width: 100%;

    .register-right-segment {
        position: relative;
        border-left: 2px solid
            ${({ theme }) => theme.cColours.cPrimary.lighten(0.45).toString()};

        .register-float-container {
            header {
                display: flex;
                align-items: center;
                position: absolute;
                left: -49px;
                bottom: 50%;
                padding: 0.5rem;

                .register-logo-container {
                    width: 5rem;
                    height: 5rem;
                    background-color: ${({ theme }) => theme.colours.primary};

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                h1 {
                    color: ${({ theme }) => theme.colours.mainText};
                    font-weight: 300;
                }
            }

            ul {
                position: absolute;
                bottom: 35%;
                left: -28px;
                display: flex;
                width: 350px;
                flex-direction: column;
                gap: 1rem;

                font-size: ${({ theme }) => theme.fonts.md};

                li {
                    color: ${({ theme }) =>
                        theme.cColours.cMainText.darken(0.15).toString()};
                }
                span {
                    color: ${({ theme }) =>
                        theme.cColours.cMainText.darken(0.2).toString()};
                }
            }
        }
    }
`;
RegisterContainer.displayName = "RegisterContainer";

export const StyledRegisterForm = styled(RegisterForm)`
    width: 525px;
    margin: auto;
`;
StyledRegisterForm.displayName = "StyledRegisterForm";
