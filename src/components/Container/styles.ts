import styled from "styled-components"

export const StyledMain = styled.main`
    width: 100%;
    max-width: ${props => props.theme["--max-width"]};
    margin: 0 auto;
    padding: ${props => props.theme["--space-5"]} ${props => props.theme["--space-4"]} ${props => props.theme["--space-7"]};
    flex: 1;

    @media screen and (min-width: 768px) {
        padding: ${props => props.theme["--space-6"]} ${props => props.theme["--space-5"]} ${props => props.theme["--space-7"]};
    }

    @media print {
        max-width: none;
        padding: 0;
    }
`

export const StyledHeaderBlock = styled.div`
    display: grid;
    gap: ${props => props.theme["--space-2"]};
    max-width: 36rem;
    margin-bottom: ${props => props.theme["--space-5"]};

    @media print {
        display: none;
    }
`

export const StyledTitle = styled.h1`
    font-size: ${props => props.theme["--fs-3xl"]};
    font-weight: 700;
    color: ${props => props.theme["--ink"]};
`

export const StyledSubtitle = styled.p`
    max-width: 48ch;
    font-size: ${props => props.theme["--fs-lg"]};
    line-height: 1.45;
    color: ${props => props.theme["--ink-soft"]};
`
