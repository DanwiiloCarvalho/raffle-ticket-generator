import styled from "styled-components"
import { StyledInput } from "../../styles/field"

export const StyledForm = styled.form`
    display: grid;
    gap: ${props => props.theme["--space-5"]};
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    padding: ${props => props.theme["--space-4"]};
    background-color: ${props => props.theme["--paper-raised"]};
    border: 1px solid ${props => props.theme["--line"]};
    border-radius: ${props => props.theme["--radius-md"]};
    box-shadow: ${props => props.theme["--shadow-paper"]};

    @media screen and (min-width: 768px) {
        padding: ${props => props.theme["--space-5"]};
    }

    @media print {
        display: none;
    }
`

export const StyledFormHeader = styled.div`
    display: grid;
    gap: ${props => props.theme["--space-1"]};
    padding-bottom: ${props => props.theme["--space-4"]};
    border-bottom: 1px solid ${props => props.theme["--line"]};
`

export const StyledFormTitle = styled.h2`
    font-size: ${props => props.theme["--fs-xl"]};
    font-weight: 700;
`

export const StyledFormIntro = styled.p`
    font-size: ${props => props.theme["--fs-sm"]};
    color: ${props => props.theme["--ink-soft"]};
`

export const StyledFormFooter = styled.div`
    display: grid;
    gap: ${props => props.theme["--space-2"]};
`

export const StyledSubmitButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.theme["--space-2"]};
    width: 100%;
    min-height: 3rem;
    padding: ${props => props.theme["--space-3"]} ${props => props.theme["--space-5"]};
    background-color: ${props => props.theme["--stamp"]};
    color: ${props => props.theme["--paper-raised"]};
    border: 1px solid ${props => props.theme["--stamp"]};
    border-radius: ${props => props.theme["--radius-sm"]};
    font-family: ${props => props.theme["--font-display"]};
    font-size: ${props => props.theme["--fs-md"]};
    font-weight: 700;
    letter-spacing: 0.01em;
    transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;

    &:hover {
        background-color: ${props => props.theme["--stamp-strong"]};
        border-color: ${props => props.theme["--stamp-strong"]};
    }

    &:active {
        transform: translateY(1px);
    }

    &:disabled {
        cursor: progress;
        opacity: 0.9;
    }
`

export const StyledSubmitHint = styled.p`
    font-size: ${props => props.theme["--fs-xs"]};
    color: ${props => props.theme["--ink-soft"]};
    text-align: center;
`

export const StyledColorRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme["--space-3"]};
`

export const StyledColorInput = styled(StyledInput)`
    width: 3.5rem;
    min-height: 2.75rem;
    padding: 0.2rem;
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: none;
        border-radius: 2px;
    }

    &::-moz-color-swatch {
        border: none;
        border-radius: 2px;
    }
`

export const StyledColorValue = styled.span`
    font-size: ${props => props.theme["--fs-sm"]};
    font-weight: 600;
    color: ${props => props.theme["--ink-soft"]};
    font-variant-numeric: tabular-nums;
    text-transform: uppercase;
`

export const StyledResults = styled.section`
    display: grid;
    gap: ${props => props.theme["--space-4"]};
    margin-top: ${props => props.theme["--space-6"]};

    @media print {
        margin: 0;
        gap: 0;
    }
`

export const StyledResultsHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: ${props => props.theme["--space-3"]};
    padding-bottom: ${props => props.theme["--space-3"]};
    border-bottom: 1px solid ${props => props.theme["--line"]};

    @media print {
        display: none;
    }
`

export const StyledResultsTitle = styled.h2`
    font-size: ${props => props.theme["--fs-xl"]};
    font-weight: 700;
`

export const StyledResultsCount = styled.p`
    font-size: ${props => props.theme["--fs-sm"]};
    color: ${props => props.theme["--ink-soft"]};
`

export const StyledReprintButton = styled.button`
    min-height: 2.5rem;
    padding: ${props => props.theme["--space-2"]} ${props => props.theme["--space-4"]};
    background-color: transparent;
    color: ${props => props.theme["--ink"]};
    border: 1px solid ${props => props.theme["--ink"]};
    border-radius: ${props => props.theme["--radius-sm"]};
    font-size: ${props => props.theme["--fs-sm"]};
    font-weight: 700;
    transition: background-color 160ms ease, color 160ms ease;

    &:hover {
        background-color: ${props => props.theme["--ink"]};
        color: ${props => props.theme["--paper-raised"]};
    }
`

export const StyledTicketList = styled.div`
    display: grid;
    gap: ${props => props.theme["--space-2"]};

    @media print {
        display: block;
        gap: 0;
    }
`
