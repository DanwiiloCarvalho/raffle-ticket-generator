import { CurrencyInput } from 'react-currency-mask';
import { Control, Controller } from 'react-hook-form';

interface CurrencyProps {
  control: Control<{
    title: string;
    subtitle: string;
    prize: string;
    price: number;
    raffleDate: Date;
    color: string,
    units: number;
  }, any>
};

export function Currency({ control }: CurrencyProps) {

  return (
    <Controller
      name="price"
      control={control}
      render={({ field }) => (
        <CurrencyInput
          value={field.value}
          onChangeValue={(_, value) => {
            field.onChange(value);
          }}
          InputElement={<input type='text' placeholder='R$ Valor da rifa' />}
        />
      )}
    />
  );
};