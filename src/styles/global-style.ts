import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @page {
        size: A4 portrait;
        margin: 10mm;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    html {
        color-scheme: light;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
        background-color: ${props => props.theme["--paper"]};
        color: ${props => props.theme["--ink"]};
        font-family: ${props => props.theme["--font-text"]};
        font-size: ${props => props.theme["--fs-base"]};
        line-height: 1.55;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    h1,
    h2,
    h3,
    h4 {
        font-family: ${props => props.theme["--font-display"]};
        line-height: 1.08;
        letter-spacing: -0.02em;
        text-wrap: balance;
    }

    p {
        text-wrap: pretty;
    }

    a {
        color: inherit;
    }

    button,
    input,
    select,
    textarea {
        font: inherit;
        color: inherit;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    img,
    svg {
        display: block;
        max-width: 100%;
    }

    ::selection {
        background-color: ${props => props.theme["--sorteio"]};
        color: ${props => props.theme["--ink"]};
    }

    :focus-visible {
        outline: 2px solid ${props => props.theme["--focus"]};
        outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    @media print {
        html,
        body {
            min-height: 0;
            max-width: none;
            overflow: visible;
            background: ${props => props.theme.white};
        }

        #root {
            display: block;
            min-height: 0;
            background: ${props => props.theme.white};
        }
    }
`
