import styled from "styled-components";

export const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    color: ${({ theme }) => theme.colours.mainText};
    width: 100%;
    max-width: 450px;
    margin: auto;

    header {
        display: flex;
        flex-direction: column;

        h2 {
            margin-top: 0;
            font-size: ${({ theme }) => theme.fonts["2xl"]};
            margin-bottom: 0.5rem;
        }

        span {
            color: ${({ theme }) =>
                theme.cColours.cMainText.darken(0.25).toString()};
        }

        p {
            margin: 0;
        }
    }

    .login-main {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .login-form-inputs {
            margin-bottom: 1rem;

            label {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
            }
        }

        .main-footer {
            display: flex;
            justify-content: space-between;

            .remember-me {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: ${({ theme }) => theme.fonts.md};
                cursor: pointer;
            }

            .remember-me-checkbox {
                width: 1rem;
                height: 1rem;
            }

            .forgot-password {
                margin-left: auto;
                font-size: ${({ theme }) => theme.fonts.md};
            }
        }
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;

        .login-btn {
            width: 100%;
            font-size: ${({ theme }) => theme.fonts.lg};
            font-family: ${({ theme }) => theme.fontFamilies.inter};
            font-weight: 500;
            letter-spacing: 0.04rem;
        }
    }
`;
LoginFormContainer.displayName = "LoginFormContainer";
