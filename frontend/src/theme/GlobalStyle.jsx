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

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Lato, sans-serif;
        font-size: ${({ theme }) => theme.font.size.regular}px;
        font-weight: ${({ theme }) => theme.font.weight.regular};
        line-height: normal;
        background: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.main_font};
        min-height: 100vh;
    }

    ::-moz-selection {
        background: ${({ theme }) => theme.colors.contrast};
        color: ${({ theme }) => theme.colors.second_font};
    }

    ::selection {
        background: ${({ theme }) => theme.colors.contrast};
        color: ${({ theme }) => theme.colors.second_font};
    }

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.colors.contrast}
        ${({ theme }) => theme.colors.main};
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${({ theme }) => theme.colors.contrast};
        border-radius: 10px;
    }

    header {
        width: 100%;
        background: ${({ theme }) => theme.colors.second};
    }
    
    #map {
        height: 300px;
    }
`;
