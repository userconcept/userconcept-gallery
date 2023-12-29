import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
    }

    html {
        font-size: 62.5%; // 10px
        -webkit-text-size-adjust: none;

        @media (min-width: 1600px) {
            font-size: 0.625vw;
        }
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        line-height: 1.5;
        font-weight: 500;
        font-family: 'Inter', Arial, Helvetica, sans-serif;
        color: #343d46;
        text-rendering: optimizeLegibility;
    }
`;
