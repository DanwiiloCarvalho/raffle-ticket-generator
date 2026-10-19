import styled from "styled-components"

export const StyledFieldset = styled.fieldset`
    min-width: 0;
    border: 0;
    padding: 0;
    margin: 0;
`

export const StyledLegend = styled.legend`
    margin-bottom: ${props => props.theme["--space-3"]};
    padding: 0;
    font-family: ${props => props.theme["--font-display"]};
    font-size: ${props => props.theme["--fs-lg"]};
    font-weight: 600;
    letter-spacing: -0.01em;
    color: ${props => props.theme["--ink"]};
`

export const StyledFormGrid = styled.div`
    display: grid;
    gap: ${props => props.theme["--space-3"]};

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

export const StyledField = styled.div<{ $span?: number }>`
    display: grid;
    align-content: start;
    gap: ${props => props.theme["--space-2"]};
    min-width: 0;

    @media screen and (min-width: 768px) {
        grid-column: ${props => props.$span === 2 ? "1 / -1" : "auto"};
    }
`

export const StyledLabel = styled.label`
    font-size: ${props => props.theme["--fs-sm"]};
    font-weight: 700;
    letter-spacing: 0.01em;
    color: ${props => props.theme["--ink"]};
`

export const StyledInput = styled.input`
    width: 100%;
    min-height: 2.875rem;
    padding: 0.65rem 0.75rem;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme["--ink"]};
    border: 1px solid ${props => props.theme["--line"]};
    border-radius: ${props => props.theme["--radius-sm"]};
    font-family: ${props => props.theme["--font-text"]};
    font-size: ${props => props.theme["--fs-md"]};
    line-height: 1.35;
    transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;

    &::placeholder {
        color: ${props => props.theme["--ink-faint"]};
        opacity: 1;
    }

    &:hover {
        border-color: ${props => props.theme["--ink-soft"]};
    }

    &:focus-visible {
        outline: 2px solid ${props => props.theme["--focus"]};
        outline-offset: 1px;
        border-color: ${props => props.theme["--ink"]};
    }

    &[aria-invalid="true"] {
        border-color: ${props => props.theme["--danger"]};
        background-color: ${props => props.theme["--danger-soft"]};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`

export const StyledHint = styled.p`
    font-size: ${props => props.theme["--fs-xs"]};
    color: ${props => props.theme["--ink-soft"]};
`

export const StyledError = styled.p`
    display: flex;
    align-items: flex-start;
    gap: ${props => props.theme["--space-1"]};
    font-size: ${props => props.theme["--fs-sm"]};
    font-weight: 600;
    line-height: 1.35;
    color: ${props => props.theme["--danger"]};

    &::before {
        content: "!";
        display: inline-grid;
        place-items: center;
        flex: 0 0 auto;
        width: 1.0625rem;
        height: 1.0625rem;
        margin-top: 0.08rem;
        border-radius: 50%;
        background-color: ${props => props.theme["--danger"]};
        color: ${props => props.theme.white};
        font-size: 0.6875rem;
        font-weight: 700;
        line-height: 1;
    }
`
