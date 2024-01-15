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
        background: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.main_font};
        min-height: 100vh;
    }
    
    header { 
        width: 100%;
        background: ${({ theme }) => theme.colors.second};
    }
`;
