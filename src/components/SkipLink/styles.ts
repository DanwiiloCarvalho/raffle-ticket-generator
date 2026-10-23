import styled from "styled-components"

export const StyledSkipLink = styled.a`
    position: fixed;
    top: ${props => props.theme["--space-2"]};
    left: ${props => props.theme["--space-2"]};
    z-index: 100;
    padding: ${props => props.theme["--space-2"]} ${props => props.theme["--space-4"]};
    background-color: ${props => props.theme["--ink"]};
    color: ${props => props.theme["--paper-raised"]};
    font-weight: 700;
    border-radius: ${props => props.theme["--radius-sm"]};
    transform: translateY(-180%);
    transition: transform 160ms ease;

    &:focus-visible {
        transform: translateY(0);
        outline: 2px solid ${props => props.theme["--focus"]};
        outline-offset: 2px;
    }
`
