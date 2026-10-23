import { Control, Controller } from "react-hook-form"
import type { IFormInput } from "../Form"
import { StyledIntegerInput } from "./styles"

interface IntegerInputProps {
    control: Control<IFormInput>
    id: string
    describedBy?: string
    invalid?: boolean
}

export function IntegerInput({ control, id, describedBy, invalid }: IntegerInputProps) {
    return (
        <Controller
            name="units"
            control={control}
            render={({ field }) => (
                <StyledIntegerInput
                    id={id}
                    name={field.name}
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="Ex.: 100"
                    value={field.value ?? ""}
                    aria-describedby={describedBy}
                    aria-invalid={invalid || undefined}
                    onBlur={field.onBlur}
                    onChange={(event) => {
                        const digits = event.target.value.replace(/\D/g, "").slice(0, 4)

                        field.onChange(digits === "" ? undefined : Number(digits))
                    }}
                />
            )}
        />
    )
}
