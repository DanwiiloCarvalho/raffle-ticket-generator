import { CurrencyInput } from 'react-currency-mask'
import { Control, Controller } from 'react-hook-form'
import type { IFormInput } from '../Form'
import { StyledCurrencyInput } from './styles'

interface CurrencyProps {
    control: Control<IFormInput>
    id: string
    describedBy?: string
    invalid?: boolean
}

export function Currency({ control, id, describedBy, invalid }: CurrencyProps) {
    return (
        <Controller
            name="price"
            control={control}
            render={({ field }) => (
                <CurrencyInput
                    value={field.value}
                    onChangeValue={(_, value) => {
                        field.onChange(value)
                    }}
                    InputElement={
                        <StyledCurrencyInput
                            id={id}
                            name={field.name}
                            type="text"
                            inputMode="decimal"
                            autoComplete="off"
                            placeholder="R$ 0,00"
                            aria-describedby={describedBy}
                            aria-invalid={invalid || undefined}
                            onBlur={field.onBlur}
                        />
                    }
                />
            )}
        />
    )
}
