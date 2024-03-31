import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function CustomInput({ name, ...other }: any) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...other}
          error={!!error}
          value={field.value}
          fullwidth
          helperText={error?.message}
        />
      )}
    />
  );
}
