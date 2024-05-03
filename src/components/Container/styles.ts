import styled from "styled-components";

export const StyledMain = styled.main`
    background-color: ${ props => props.theme["--secondary-background"] };
    height: inherit;
    padding: .5rem;
    flex: 1;

    h1 {
        font-size: 1.4rem;
        margin: 1rem 0;
    }
`