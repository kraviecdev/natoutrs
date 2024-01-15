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
        align-items: center;
        font-family: Lato, sans-serif;
        gap: 32px;
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

    header {
        width: 100%;
        background: ${({ theme }) => theme.colors.second};
    }

    main {
        max-width: ${({ theme }) => theme.breakpoints.xl}px;
        width: 100%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 24px;
        padding: 0 10px;

        @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.xl}px) {
            padding: 0;
        }
    }
`;
