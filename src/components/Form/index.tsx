import { useForm, SubmitHandler } from "react-hook-form";
import { DangerMessage, StyledForm } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Currency } from "../Currency";
import { removeTimeFromDate } from "../../utils/remove-time-from-date";
import { IntegerInput } from "../IntegerInput";
import { Ticket } from "../Ticket";
import { useEffect, useRef, useState } from "react";

 
const formSchema = z.object({
    title: z.string().min(1, {
        message: "O título é obrigatório"
    }).max(25, {
        message: "O título pode conter no máximo 25 caracteres"
    }).toUpperCase(),
    subtitle: z.string().min(1, {
        message: "O subtítulo é obrigatório"
    }).max(40),
    prize: z.string().min(1, {
        message: "O prêmio é obrigatório"
    }).max(23),
    price: z.number({
        invalid_type_error: "Valor deve ser um número",
        required_error: "O valor é obrigatório"
    }).positive({ message: "O valor deve ser maior que R$ 0,00" }).lte(100, { message: "O valor máximo é de R$ 100,00" }),
    raffleDate: z.date({
        message:"A data é obrigatória",
        errorMap: (issue, { defaultError }) => ({message: issue.code === "invalid_date" ? "Data inválida!" : defaultError})
    }).min(new Date(removeTimeFromDate(Date.now())), { message: "A Data não pode ser retroativa" }),
    
    units: z.number({
        message: "Não é número"
    }).max(1000, {
        message: "Quantidade máxima é de 1000 tickets"
    }).min(1, {
        message: "Quantidade deve ser maior que zero"
    })

})

export type IFormInput = z.infer<typeof formSchema>

export function Form() {
    const [tickets, setTickets] = useState<IFormInput[]>([])
    const ticketlist = useRef<HTMLDivElement | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue
    } = useForm<IFormInput>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        
        if (tickets.length != data.units) {
            setTickets([])

            for (let unit = 1; unit <= data.units; unit++) {
                setTickets(prev => [...prev, { key: unit, ...data, units: unit }])
            }
        } else {
            window.print()
        }
    };

    useEffect(() => {
        if (tickets.length > 0) {
            window.print()
        }
    }, [tickets.length])

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)} >
                <input type="text" placeholder="Título" {...register("title")} aria-label="teste" />
                <DangerMessage>{errors.title?.message}</DangerMessage>
                <input type="text" placeholder="Subtítulo" {...register("subtitle")} />
                <DangerMessage>{errors.subtitle?.message}</DangerMessage>
                <input type="text" placeholder="Prêmio" {...register("prize")} />
                <DangerMessage>{errors.prize?.message}</DangerMessage>

                <Currency control={control} />

                <DangerMessage>{errors.price?.message}</DangerMessage>
                <div>
                    <label htmlFor="raffleDate">Data do sorteio:</label>
                    <input id="raffleDate" type="date" defaultValue={removeTimeFromDate(Date.now())} min={removeTimeFromDate(Date.now())} {...register("raffleDate", { valueAsDate: true })} /* min={new Date().toISOString().split('T')[0]} */ />
                </div>
                <DangerMessage>{errors.raffleDate?.message}</DangerMessage>
                <IntegerInput control={control} setFieldValue={setValue} />
                <DangerMessage>{errors.units?.message}</DangerMessage>
                <button type="submit">Gerar tickets</button>
            </StyledForm>
            {
                (tickets.length > 0) && <div ref={ticketlist}>
                    { tickets.map(ticket => <Ticket { ...ticket } />) }
                </div>
            }
        </>
    )
}