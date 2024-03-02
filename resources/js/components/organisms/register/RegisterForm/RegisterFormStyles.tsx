import styled from "styled-components";

export const RegisterFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colours.mainText};

    header {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-bottom: 0.25rem;

        h2 {
            font-size: ${({ theme }) => theme.fonts["2xl"]};
            font-weight: 500;
            margin-bottom: 0;
        }

        p {
            margin: 0.5rem 0;
            color: ${({ theme }) =>
                theme.cColours.cMainText.darken(0.25).toString()};
        }

        .info {
            margin: 1rem 0;
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

        .register-agreement {
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: center;
            justify-content: flex-start;
            font-weight: 300;
            font-size: ${({ theme }) => theme.fonts.md};
            cursor: pointer;

            .agreement-checkbox {
                width: 1rem;
                height: 1rem;
            }

            .agreement-text {
                pointer-events: none;
            }
        }
    }

    footer {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;

        .register-btn {
            width: 100%;
            font-size: ${({ theme }) => theme.fonts.lg};
            font-family: ${({ theme }) => theme.fontFamilies.inter};
            font-weight: 500;
            letter-spacing: 0.02rem;
        }
    }
`;
RegisterFormContainer.displayName = "RegisterFormContainer";
