import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        display: flex;
        flex-direction: column;
        font-family: Lato, sans-serif;
        font-size: ${({ theme }) => theme.font.size.regular}px;
        font-weight: ${({ theme }) => theme.font.weight.regular};
        line-height: normal;
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.indigo};
        min-height: 100vh;
    }
`;
