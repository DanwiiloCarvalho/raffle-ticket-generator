import styled from "styled-components";

export const StyledMain = styled.main`
    background-color: ${ props => props.theme["--secondary-background"] };
    height: inherit;
    padding: .5rem;
    flex: 1;

    h1 {
        font-size: 1.4rem;
        margin: 1rem 0;

        @media print {
            display: none;
        }
    }

    form + div {
        margin-top: 1rem;
    }

    @media print {
        background-color: ${ props => props.theme.white };

        form + div {
            margin-top: 0;
        }
    }

    @media screen and (min-width: 600px) {
        h1 {
            text-align: center;
        }
    }
`