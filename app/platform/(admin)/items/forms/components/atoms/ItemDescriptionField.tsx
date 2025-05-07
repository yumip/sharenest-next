import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export default function ItemDescriptionField() {
  //useForm({ defaultValues,});
  const { control } = useForm();
  //useState(defaultValues?.imageUrl || "");
  return (
    <Controller
      name="description"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Description"
          multiline
          rows={4}
          fullWidth
        />
      )}
    />
  );
}
