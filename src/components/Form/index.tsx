import { useEffect, useState } from "react"
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Currency } from "../Currency"
import { IntegerInput } from "../IntegerInput"
import { Ticket } from "../Ticket"
import { Bounce } from "../Bounce"
import { getTodayISO, getTodayStart } from "../../utils/date"
import {
    StyledColorInput,
    StyledColorRow,
    StyledColorValue,
    StyledForm,
    StyledFormFooter,
    StyledFormHeader,
    StyledFormIntro,
    StyledFormTitle,
    StyledReprintButton,
    StyledResults,
    StyledResultsCount,
    StyledResultsHeader,
    StyledResultsTitle,
    StyledSubmitButton,
    StyledSubmitHint,
    StyledTicketList,
} from "./styles"
import {
    StyledError,
    StyledField,
    StyledFieldset,
    StyledFormGrid,
    StyledHint,
    StyledInput,
    StyledLabel,
    StyledLegend,
} from "../../styles/field"

const formSchema = z.object({
    title: z.string()
        .trim()
        .min(1, { message: "Informe o título da rifa" })
        .max(25, { message: "Use no máximo 25 caracteres" })
        .toUpperCase(),
    subtitle: z.string()
        .trim()
        .max(40, { message: "Use no máximo 40 caracteres" }),
    prize: z.string()
        .trim()
        .min(1, { message: "Informe o prêmio" })
        .max(55, { message: "Use no máximo 55 caracteres" }),
    price: z.number({
        invalid_type_error: "Informe o valor do bilhete",
        required_error: "Informe o valor do bilhete"
    })
        .positive({ message: "O valor deve ser maior que R$ 0,00" })
        .lte(100, { message: "O valor máximo é de R$ 100,00" }),
    raffleDate: z.date({
        required_error: "Informe a data do sorteio",
        invalid_type_error: "Informe uma data válida"
    })
        .refine(date => date >= getTodayStart(), { message: "A data não pode ser retroativa" }),
    color: z.string()
        .regex(/^#[0-9a-f]{6}$/i, { message: "Escolha uma cor válida" }),
    units: z.number({
        invalid_type_error: "Informe a quantidade de tickets",
        required_error: "Informe a quantidade de tickets"
    })
        .int({ message: "Use um número inteiro" })
        .min(1, { message: "A quantidade deve ser maior que zero" })
        .max(1000, { message: "A quantidade máxima é de 1000 tickets" })
})

export type IFormInput = z.infer<typeof formSchema>

function getDescribedBy(name: keyof IFormInput, hasError: boolean): string {
    return hasError ? `${name}-hint ${name}-error` : `${name}-hint`
}

export function Form() {
    const [tickets, setTickets] = useState<IFormInput[]>([])
    const [isVisibleSpinner, setIsVisibleSpinner] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setFocus,
        watch
    } = useForm<IFormInput>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            color: "#C6331F",
            subtitle: ""
        }
    })

    const colorValue = watch("color")

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const ticketValues = JSON.stringify(tickets[tickets.length - 1])
        const dataValues = JSON.stringify(data)

        if (ticketValues !== dataValues) {
            setIsVisibleSpinner(true)
            setTickets(
                Array.from({ length: data.units }, (_, index) => ({
                    ...data,
                    units: index + 1
                }))
            )
        } else {
            setIsVisibleSpinner(false)
            window.print()
        }
    }

    const onInvalid = (formErrors: FieldErrors<IFormInput>) => {
        const firstError = Object.keys(formErrors)[0] as keyof IFormInput | undefined

        if (firstError) {
            setFocus(firstError)
        }
    }

    useEffect(() => {
        if (tickets.length > 0) {
            setIsVisibleSpinner(false)
            window.print()
        }
    }, [tickets])

    const ticketCountLabel = tickets.length === 1
        ? "1 bilhete pronto para imprimir"
        : `${tickets.length} bilhetes prontos para imprimir`

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
                <StyledFormHeader>
                    <StyledFormTitle>Dados da rifa</StyledFormTitle>
                    <StyledFormIntro>Os campos marcados com * são obrigatórios.</StyledFormIntro>
                </StyledFormHeader>

                <StyledFieldset>
                    <StyledLegend>Sobre a rifa</StyledLegend>
                    <StyledFormGrid>
                        <StyledField $span={2}>
                            <StyledLabel htmlFor="title">Título da rifa *</StyledLabel>
                            <StyledInput
                                {...register("title")}
                                id="title"
                                type="text"
                                placeholder="Ex.: Rifa do bairro…"
                                autoComplete="off"
                                spellCheck={false}
                                maxLength={25}
                                aria-invalid={errors.title ? true : undefined}
                                aria-describedby={getDescribedBy("title", Boolean(errors.title))}
                            />
                            <StyledHint id="title-hint">Até 25 caracteres. Aparece em destaque no bilhete.</StyledHint>
                            {errors.title && <StyledError id="title-error" role="alert">{errors.title.message}</StyledError>}
                        </StyledField>

                        <StyledField>
                            <StyledLabel htmlFor="subtitle">Subtítulo (opcional)</StyledLabel>
                            <StyledInput
                                {...register("subtitle")}
                                id="subtitle"
                                type="text"
                                placeholder="Ex.: Igreja São José…"
                                autoComplete="off"
                                maxLength={40}
                                aria-invalid={errors.subtitle ? true : undefined}
                                aria-describedby={getDescribedBy("subtitle", Boolean(errors.subtitle))}
                            />
                            <StyledHint id="subtitle-hint">Até 40 caracteres. Pode ficar em branco.</StyledHint>
                            {errors.subtitle && <StyledError id="subtitle-error" role="alert">{errors.subtitle.message}</StyledError>}
                        </StyledField>

                        <StyledField>
                            <StyledLabel htmlFor="prize">Prêmio *</StyledLabel>
                            <StyledInput
                                {...register("prize")}
                                id="prize"
                                type="text"
                                placeholder="Ex.: Cesta de café da manhã…"
                                autoComplete="off"
                                maxLength={55}
                                aria-invalid={errors.prize ? true : undefined}
                                aria-describedby={getDescribedBy("prize", Boolean(errors.prize))}
                            />
                            <StyledHint id="prize-hint">Até 55 caracteres.</StyledHint>
                            {errors.prize && <StyledError id="prize-error" role="alert">{errors.prize.message}</StyledError>}
                        </StyledField>
                    </StyledFormGrid>
                </StyledFieldset>

                <StyledFieldset>
                    <StyledLegend>Valores e sorteio</StyledLegend>
                    <StyledFormGrid>
                        <StyledField>
                            <StyledLabel htmlFor="price">Valor do bilhete *</StyledLabel>
                            <Currency
                                control={control}
                                id="price"
                                invalid={Boolean(errors.price)}
                                describedBy={getDescribedBy("price", Boolean(errors.price))}
                            />
                            <StyledHint id="price-hint">Entre R$ 0,01 e R$ 100,00.</StyledHint>
                            {errors.price && <StyledError id="price-error" role="alert">{errors.price.message}</StyledError>}
                        </StyledField>

                        <StyledField>
                            <StyledLabel htmlFor="units">Quantidade de bilhetes *</StyledLabel>
                            <IntegerInput
                                control={control}
                                id="units"
                                invalid={Boolean(errors.units)}
                                describedBy={getDescribedBy("units", Boolean(errors.units))}
                            />
                            <StyledHint id="units-hint">De 1 a 1000 bilhetes.</StyledHint>
                            {errors.units && <StyledError id="units-error" role="alert">{errors.units.message}</StyledError>}
                        </StyledField>

                        <StyledField>
                            <StyledLabel htmlFor="raffleDate">Data do sorteio *</StyledLabel>
                            <StyledInput
                                {...register("raffleDate", { valueAsDate: true })}
                                id="raffleDate"
                                type="date"
                                min={getTodayISO()}
                                defaultValue={getTodayISO()}
                                aria-invalid={errors.raffleDate ? true : undefined}
                                aria-describedby={getDescribedBy("raffleDate", Boolean(errors.raffleDate))}
                            />
                            <StyledHint id="raffleDate-hint">A data não pode ser retroativa.</StyledHint>
                            {errors.raffleDate && <StyledError id="raffleDate-error" role="alert">{errors.raffleDate.message}</StyledError>}
                        </StyledField>

                        <StyledField>
                            <StyledLabel htmlFor="color">Cor de destaque *</StyledLabel>
                            <StyledColorRow>
                                <StyledColorInput
                                    {...register("color")}
                                    id="color"
                                    type="color"
                                    aria-describedby="color-hint"
                                />
                                <StyledColorValue>{colorValue}</StyledColorValue>
                            </StyledColorRow>
                            <StyledHint id="color-hint">Usada na faixa do título. O texto se ajusta para manter a leitura.</StyledHint>
                        </StyledField>
                    </StyledFormGrid>
                </StyledFieldset>

                <StyledFormFooter>
                    <StyledSubmitButton type="submit" disabled={isVisibleSpinner} aria-busy={isVisibleSpinner || undefined}>
                        {isVisibleSpinner ? (
                            <>
                                <Bounce />
                                <span>Gerando talão…</span>
                            </>
                        ) : "Gerar talão"}
                    </StyledSubmitButton>
                    <StyledSubmitHint>Os bilhetes abrem na janela de impressão assim que ficam prontos.</StyledSubmitHint>
                </StyledFormFooter>
            </StyledForm>

            {tickets.length > 0 && (
                <StyledResults aria-labelledby="results-title">
                    <StyledResultsHeader>
                        <div>
                            <StyledResultsTitle id="results-title">Talão gerado</StyledResultsTitle>
                            <StyledResultsCount>{ticketCountLabel}</StyledResultsCount>
                        </div>
                        <StyledReprintButton type="button" onClick={() => window.print()}>
                            Imprimir novamente
                        </StyledReprintButton>
                    </StyledResultsHeader>
                    <StyledTicketList>
                        {tickets.map(ticket => (
                            <Ticket key={ticket.units} totalTickets={String(tickets.length)} {...ticket} />
                        ))}
                    </StyledTicketList>
                </StyledResults>
            )}
        </>
    )
}
