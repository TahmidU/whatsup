import styled from "styled-components";

export const AuthFloatInfoContainer = styled.div`
    position: relative;
    border-left: 2px solid
        ${({ theme }) => theme.cColours.cPrimary.lighten(0.45).toString()};

    .register-float-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 50%;
        left: -49px;

        header {
            display: flex;
            align-items: center;
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
                letter-spacing: 0.175rem;
                color: ${({ theme }) => theme.colours.mainText};
                font-weight: 400;
            }
        }
    }
`;
AuthFloatInfoContainer.displayName = "AuthFloatInfoContainer";
