import styled from "styled-components"

export const StyledScrollButton = styled.button`
    position: fixed;
    right: ${props => props.theme["--space-4"]};
    bottom: ${props => props.theme["--space-4"]};
    z-index: 10;
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.theme["--ink"]};
    color: ${props => props.theme["--paper-raised"]};
    border: 1px solid ${props => props.theme["--ink"]};
    border-radius: ${props => props.theme["--radius-md"]};
    box-shadow: 0 10px 24px -12px rgba(36, 31, 26, 0.75);
    transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;

    &:hover {
        background-color: ${props => props.theme["--stamp"]};
        border-color: ${props => props.theme["--stamp"]};
    }

    &:active {
        background-color: ${props => props.theme["--stamp-strong"]};
        border-color: ${props => props.theme["--stamp-strong"]};
        transform: translateY(1px);
    }

    &:focus-visible {
        outline: 2px solid ${props => props.theme["--focus"]};
        outline-offset: 3px;
    }

    @media print {
        display: none;
    }
`
