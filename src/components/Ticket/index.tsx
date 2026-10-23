import { formatCurrencyBRL, formatDateBR } from "../../utils/date"
import { getContrastingText } from "../../utils/color"
import type { IFormInput } from "../Form"
import {
    StyledSerial,
    StyledSerialEcho,
    StyledSerialLabel,
    StyledStub,
    StyledStubField,
    StyledStubFields,
    StyledStubTop,
    StyledTicket,
    StyledTicketBody,
    StyledTicketHeading,
    StyledTicketMeta,
    StyledTicketPrice,
    StyledTicketPrize,
    StyledTicketSubtitle,
    StyledTicketTitle,
} from "./styles"

interface TicketProps extends IFormInput {
    totalTickets: string
}

export function Ticket({ units, totalTickets, title, subtitle, prize, price, raffleDate, color }: TicketProps) {
    const serial = String(units).padStart(totalTickets.length, "0")
    const onColor = getContrastingText(color)

    return (
        <StyledTicket aria-label={`Ticket número ${serial}`}>
            <StyledStub>
                <StyledStubTop>
                    <StyledSerialLabel>Nº</StyledSerialLabel>
                    <StyledSerial>{serial}</StyledSerial>
                </StyledStubTop>
                <StyledStubFields>
                    <StyledStubField><span>Nome</span></StyledStubField>
                    <StyledStubField><span>Telefone</span></StyledStubField>
                    <StyledStubField><span>E-mail</span></StyledStubField>
                    <StyledStubField><span>Endereço</span></StyledStubField>
                </StyledStubFields>
            </StyledStub>

            <StyledTicketBody>
                <StyledTicketHeading $variant={color} $onColor={onColor}>
                    <StyledTicketTitle>{title}</StyledTicketTitle>
                    {subtitle && <StyledTicketSubtitle>{subtitle}</StyledTicketSubtitle>}
                </StyledTicketHeading>
                <StyledTicketPrize>
                    <strong>Prêmio</strong>
                    {prize}
                </StyledTicketPrize>
                <StyledTicketMeta>
                    <span>Sorteio em {formatDateBR(raffleDate)}</span>
                    <StyledTicketPrice>{formatCurrencyBRL(price)}</StyledTicketPrice>
                </StyledTicketMeta>
                <StyledSerialEcho $variant={color} $onColor={onColor}>nº {serial}</StyledSerialEcho>
            </StyledTicketBody>
        </StyledTicket>
    )
}
