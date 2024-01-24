import styled from "styled-components";

export const RegisterFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colours.mainText};

    .register-form-welcome-segment {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-bottom: 2rem;

        span {
            display: block;
            width: fit-content;
        }

        span:first-child {
            font-size: ${({ theme }) => theme.fonts["2xl"]};
            font-weight: 500;
        }

        span:last-child {
            font-weight: 300;
            font-size: ${({ theme }) => theme.fonts["md"]};
        }
    }

    .register-form-inputs {
        label {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-weight: 300;
            font-size: ${({ theme }) => theme.fonts.md};
        }

        .register-form-tos-pp {
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: center;
            justify-content: flex-start;
            font-weight: 300;
            font-size: ${({ theme }) => theme.fonts.sm};

            .register-form-agreement {
                width: 1rem;
                height: 1rem;
            }
        }
    }

    footer {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;

        .register-form-login {
            padding-left: 0;
            padding-right: 0;
            font-size: ${({ theme }) => theme.fonts.md};
            opacity: 0.85;

            &:hover {
                opacity: 1;
            }
        }

        & > button:last-child {
            font-size: ${({ theme }) => theme.fonts.md};
        }
    }
`;
RegisterFormContainer.displayName = "RegisterFormContainer";
