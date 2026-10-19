import styled from "styled-components"

export const StyledHeader = styled.header`
    position: relative;
    z-index: 2;
    background-color: ${props => props.theme["--paper-raised"]};
    border-bottom: 1px solid ${props => props.theme["--line"]};

    &::before {
        content: "";
        display: block;
        height: 3px;
        background-color: ${props => props.theme["--stamp"]};
    }

    @media print {
        display: none;
    }
`

export const StyledBrand = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme["--space-3"]};
    width: 100%;
    max-width: ${props => props.theme["--max-width"]};
    margin: 0 auto;
    padding: ${props => props.theme["--space-3"]} ${props => props.theme["--space-4"]};
`

export const StyledLogo = styled.img`
    width: 2.25rem;
    height: 2.25rem;
    flex: 0 0 auto;
    border: 1px solid ${props => props.theme["--line"]};
    border-radius: 50%;
    background-color: ${props => props.theme.white};
    object-fit: cover;
`

export const StyledWordmark = styled.p`
    display: grid;
    gap: 0.05rem;
    font-family: ${props => props.theme["--font-display"]};
    font-size: ${props => props.theme["--fs-md"]};
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.01em;
`

export const StyledWordmarkCaption = styled.span`
    font-family: ${props => props.theme["--font-text"]};
    font-size: ${props => props.theme["--fs-xs"]};
    font-weight: 500;
    letter-spacing: 0.01em;
    color: ${props => props.theme["--ink-soft"]};
`
