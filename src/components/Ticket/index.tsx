import { TicketContainer, TicketForm, TicketInfo, Unit } from "./styles";

interface TicketProps {
    title: string;
    subtitle: string;
    prize: string;
    price: number;
    raffleDate: string;
    units: number;
}
export function Ticket(props: TicketProps) {
    return (
        <TicketContainer>
            <TicketForm>
                <Unit>nº {props.units}</Unit>
                <div><span>Nome:</span></div>
                <div><span>Telefone:</span></div>
                <div><span>Email:</span></div>
                <div><span>Endereço:</span></div>
            </TicketForm>
            <TicketInfo>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <p><strong>Prêmio:</strong> <span>{props.prize}</span></p>
                <p>Sorteio: {props.raffleDate}</p>
                <div>
                    <span>Valor: R$ {props.price}</span>
                    <Unit>nº {props.units}</Unit>
                </div>
            </TicketInfo>
        </TicketContainer>
    )
}