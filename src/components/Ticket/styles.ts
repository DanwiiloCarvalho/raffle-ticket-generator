import styled from "styled-components"

export const StyledTicket = styled.article`
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    min-height: 45mm;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme["--ink"]};
    border: 1px solid ${props => props.theme["--line-strong"]};
    border-radius: ${props => props.theme["--radius-md"]};
    overflow: hidden;
    break-inside: avoid;
    page-break-inside: avoid;
    break-after: auto;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;

    @media screen and (min-width: 768px) {
        min-width: 46rem;
        margin-inline: auto;
    }

    @media print {
        width: 100%;
        max-width: none;
        margin: 0;
        border-radius: 0;
        border-color: ${props => props.theme["--line-strong"]};
    }
`

export const StyledStub = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme["--space-2"]};
    padding: ${props => props.theme["--space-3"]};
    background-color: ${props => props.theme["--paper-raised"]};
    border-right: 2px dashed ${props => props.theme["--line-strong"]};

    @media print {
        background-color: ${props => props.theme.white};
    }
`

export const StyledStubTop = styled.div`
    display: flex;
    align-items: baseline;
    gap: ${props => props.theme["--space-2"]};
`

export const StyledSerialLabel = styled.span`
    font-size: ${props => props.theme["--fs-xs"]};
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${props => props.theme["--ink-soft"]};
`

export const StyledSerial = styled.span`
    font-family: ${props => props.theme["--font-display"]};
    font-size: ${props => props.theme["--fs-xl"]};
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.02em;
    font-variant-numeric: tabular-nums;
`

export const StyledStubFields = styled.div`
    display: grid;
    gap: ${props => props.theme["--space-3"]};
    margin-top: ${props => props.theme["--space-2"]};
`

export const StyledStubField = styled.div`
    display: grid;
    gap: 0.25rem;

    span {
        font-size: 0.625rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: ${props => props.theme["--ink-soft"]};
    }

    &::after {
        content: "";
        display: block;
        height: 0.7rem;
        border-bottom: 1px solid ${props => props.theme["--line"]};
    }
`

export const StyledTicketBody = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${props => props.theme["--space-2"]};
    min-width: 0;
    padding: ${props => props.theme["--space-3"]};

    @media screen and (min-width: 768px) {
        padding: ${props => props.theme["--space-4"]};
    }
`

export const StyledTicketHeading = styled.div<{ $variant: string; $onColor: string }>`
    display: grid;
    gap: 0.15rem;
    padding: ${props => props.theme["--space-2"]} ${props => props.theme["--space-3"]};
    background-color: ${props => props.$variant};
    color: ${props => props.$onColor};
    border-radius: ${props => props.theme["--radius-sm"]};
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
`

export const StyledTicketTitle = styled.p`
    font-family: ${props => props.theme["--font-display"]};
    font-size: ${props => props.theme["--fs-lg"]};
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    overflow-wrap: anywhere;
`

export const StyledTicketSubtitle = styled.p`
    font-size: ${props => props.theme["--fs-xs"]};
    font-weight: 500;
    opacity: 0.92;
    overflow-wrap: anywhere;
`

export const StyledTicketPrize = styled.p`
    font-size: ${props => props.theme["--fs-sm"]};
    line-height: 1.4;
    overflow-wrap: anywhere;

    strong {
        display: block;
        font-size: 0.625rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: ${props => props.theme["--ink-soft"]};
    }
`

export const StyledTicketMeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: ${props => props.theme["--space-2"]};
    padding-top: ${props => props.theme["--space-2"]};
    border-top: 1px solid ${props => props.theme["--line"]};
    font-size: ${props => props.theme["--fs-xs"]};
    font-weight: 600;
    color: ${props => props.theme["--ink-soft"]};
`

export const StyledTicketPrice = styled.span`
    font-size: ${props => props.theme["--fs-sm"]};
    font-weight: 700;
    color: ${props => props.theme["--ink"]};
    font-variant-numeric: tabular-nums;
`

export const StyledSerialEcho = styled.span<{ $variant: string; $onColor: string }>`
    align-self: flex-start;
    padding: 0.1rem 0.4rem;
    background-color: ${props => props.$variant};
    color: ${props => props.$onColor};
    border-radius: ${props => props.theme["--radius-sm"]};
    font-family: ${props => props.theme["--font-display"]};
    font-size: ${props => props.theme["--fs-xs"]};
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
`
