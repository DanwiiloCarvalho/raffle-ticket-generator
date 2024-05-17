import { addTimeToDate } from "../../utils/add-time-to-date";
import { removeTimeFromDate } from "../../utils/remove-time-from-date";
import { IFormInput } from "../Form";
import { TicketContainer, TicketForm, TicketInfo, Unit } from "./styles";

interface TicketProps extends IFormInput {
    totalTickets: string
}

export function Ticket(props: TicketProps) {
    return (
        <TicketContainer>
            <TicketForm>
                <Unit>nº {String(props.units).padStart(props.totalTickets.length, '0')}</Unit>
                <div><span>Nome:</span></div>
                <div><span>Telefone:</span></div>
                <div><span>Email:</span></div>
                <div><span>Endereço:</span></div>
            </TicketForm>
            <TicketInfo $variant={props.color}>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <p><strong>Prêmio:</strong> <span>{props.prize}</span></p>
                <p>Sorteio: {
                    removeTimeFromDate(addTimeToDate(props.raffleDate, "00:00:00")).split("-").reverse().join("/")
                }
                </p>
                <div>
                    <span>Valor: {
                        Intl.NumberFormat("pt-BR", {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(props.price)
                    }
                    </span>
                    <Unit>nº {String(props.units).padStart(props.totalTickets.length, '0')}</Unit>
                </div>
            </TicketInfo>
        </TicketContainer>
    )
}