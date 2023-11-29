import { REMOVE_LINK_STYLE, REMOVE_LIST_STYLE } from "@/constants/Styles";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 72px;

    .nav-list {
        ${REMOVE_LIST_STYLE};
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;

        li {
            font-size: ${({ theme }) => theme.fonts.md};
            font-family: ${({ theme }) => theme.fontFamilies.inter};

            a {
                ${REMOVE_LINK_STYLE};
                font-weight: bold;
                color: ${({ theme }) => theme.colours.mainText};
            }
        }
    }
`;
Container.displayName = "Container";
