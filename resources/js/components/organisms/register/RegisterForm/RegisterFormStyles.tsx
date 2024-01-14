import Card from "@/components/atoms/Card";
import styled from "styled-components";

export const RegisterFormContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50rem;
    width: 40rem;
    margin: auto;
    padding: 2rem 0;

    form {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: space-between;
        header {
            .register-form-logo-container {
                display: flex;
                justify-content: center;

                img {
                    height: 4rem;
                    width: 4rem;
                }
            }

            .register-form-welcome-segment {
                display: flex;
                flex-direction: column;
                gap: 0.625rem;
                margin-top: 1.5rem;

                span {
                    display: block;
                    width: fit-content;
                    margin: 0 auto;
                }

                span:first-child {
                    font-size: ${({ theme }) => theme.fonts["2xl"]};
                    font-weight: 500;
                }

                span:not(:first-child) {
                    font-weight: 300;
                    font-size: ${({ theme }) => theme.fonts["md"]};
                }

                span:last-child {
                    color: ${({ theme }) => theme.colours.danger};
                    font-size: ${({ theme }) => theme.fonts["sm"]};
                }
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
                display: inline-block;
                font-weight: 300;
                font-size: ${({ theme }) => theme.fonts.sm};
                vertical-align: middle;

                .register-form-agreement {
                    display: inline-block;
                    margin-right: 0.45rem;
                    width: 1rem;
                    height: 1rem;
                }

                button {
                    display: inline-block;
                    opacity: 0.625;
                    padding: 0;

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }
    }
`;
RegisterFormContainer.displayName = "RegisterFormContainer";
