import { FormEvent, useEffect, useState } from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

interface IntegerInputProps {
    control: Control<{
        title: string;
        subtitle: string;
        prize: string;
        price: number;
        raffleDate: Date;
        color: string;
        units: number;
    }, any>,
    setFieldValue: UseFormSetValue<{
        title: string;
        subtitle: string;
        prize: string;
        price: number;
        raffleDate: Date;
        color: string;
        units: number;
    }>
};


export function IntegerInput({ control, setFieldValue }: IntegerInputProps) {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        // Permite apenas números inteiros
        const re = /^[0-9\b]+$/;
        if (value === '' || re.test(value)) {
            setValue(value);
        }
    };

    useEffect(() => {
        setFieldValue("units", Number(value))
    }, [value])

    return (
        <Controller
            name="units"
            control={control}
            render={({ field }) => (
                <input
                    {...field}
                    type="string"
                    value={value}
                    onChange={handleChange}
                    placeholder="Quantidade de tickets"
                />
            )}
        />
    );
}