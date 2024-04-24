import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 3.5rem;
    background-color: ${ props => props.theme["--primary-background"] };

    div {
        margin-left: 1rem;
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    span {
        color: ${ props => props.theme.white };
        text-transform: uppercase;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 2rem;
    }
`