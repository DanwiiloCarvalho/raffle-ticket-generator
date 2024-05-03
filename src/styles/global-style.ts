import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        font-size: 1rem;
    }

    body, html {
        min-height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;

        > div {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
    }

    input:focus {
        outline: none;
    }

    body, button, textarea, input {
        font: 400 1rem Roboto, sans-serif;
    }
`