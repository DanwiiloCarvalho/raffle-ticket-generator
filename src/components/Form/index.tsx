import { useForm, SubmitHandler } from "react-hook-form";
import { DangerMessage, StyledForm } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Currency } from "../Currency";
import { removeTimeFromDate } from "../../utils/remove-time-from-date";
import { IntegerInput } from "../IntegerInput";
import { Ticket } from "../Ticket";
import { useEffect, useRef, useState } from "react";
import { Bounce } from "../Bounce";

 
const formSchema = z.object({
    title: z.string().min(1, {
        message: "O título é obrigatório"
    }).max(25, {
        message: "O título pode conter no máximo 25 caracteres"
    }).toUpperCase(),
    subtitle: z.string().max(40, { message: "O subtítulo deve conter no máximo 40 caracteres" }),
    prize: z.string().min(1, {
        message: "O prêmio é obrigatório"
    }).max(55, { message: "O prêmio deve conter no máximo 55 caracteres" }),
    price: z.number({
        invalid_type_error: "Valor deve ser um número",
        required_error: "O valor é obrigatório"
    }).positive({ message: "O valor deve ser maior que R$ 0,00" }).lte(100, { message: "O valor máximo é de R$ 100,00" }),
    raffleDate: z.date({
        message:"A data é obrigatória",
        errorMap: (issue, { defaultError }) => ({message: issue.code === "invalid_date" ? "Data inválida!" : defaultError})
    }).min(new Date(removeTimeFromDate(Date.now())), { message: "A Data não pode ser retroativa" }),
    color: z.string(),
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
    const [isVisibleSpinner, setIsVisibleSpinner] = useState<boolean>(false)
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
        const ticketValues = JSON.stringify(tickets[tickets.length - 1])
        const dataValues = JSON.stringify(data)

        if (ticketValues !== dataValues) {
            setIsVisibleSpinner(true)
            setTickets([])

            for (let unit = 1; unit <= data.units; unit++) {
                setTickets(prev => [...prev, { ...data, units: unit }])
            }
        } else {
            setIsVisibleSpinner(false)
            window.print()
        }
    };

    useEffect(() => {
        if (tickets.length > 0) {
            setIsVisibleSpinner(false)
            window.print()
        }
    }, [tickets])

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)} >
                <input type="text" placeholder="Título" {...register("title")} aria-label="teste" />
                <DangerMessage>{errors.title?.message}</DangerMessage>
                <input type="text" placeholder="Subtítulo (Opcional)" {...register("subtitle")} />
                <DangerMessage>{errors.subtitle?.message}</DangerMessage>
                <input type="text" placeholder="Prêmio" {...register("prize")} />
                <DangerMessage>{errors.prize?.message}</DangerMessage>

                <Currency control={control} />
                
                <DangerMessage>{errors.price?.message}</DangerMessage>
                <div>
                    <label htmlFor="raffleDate">Data do sorteio:</label>
                    <input id="raffleDate" type="date" defaultValue={removeTimeFromDate(Date.now())} min={removeTimeFromDate(Date.now())} {...register("raffleDate", { valueAsDate: true })} />
                </div>
                <DangerMessage>{errors.raffleDate?.message}</DangerMessage>
                <div>
                    <label htmlFor="color">Escolha uma cor:</label>
                    <input id="color" type="color" {...register("color")} />
                </div>
                <DangerMessage>{errors.color?.message}</DangerMessage>
                <IntegerInput control={control} setFieldValue={setValue} />
                <DangerMessage>{errors.units?.message}</DangerMessage>
                <button type="submit">
                    {isVisibleSpinner ? <Bounce /> : "Gerar tickets" }
                </button>
            </StyledForm>
            {
                (tickets.length > 0) && <div ref={ticketlist}>
                    { tickets.map(ticket => <Ticket key={ticket.units} totalTickets={String(tickets.length)} { ...ticket } />) }
                </div>
            }
        </>
    )
}