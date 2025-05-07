import { Box, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ItemPhotoUploader from "./atoms/ItemPhotoUploader";
import ItemDescriptionField from "./atoms/ItemDescriptionField";

type NewItemFormProps = {
  defaultValues: any; //ItemDetailFormData
  onSubmit: (data: any) => void;
};
export default function NewItemForm({
  defaultValues,
  onSubmit,
}: NewItemFormProps) {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={3}>
        <ItemPhotoUploader />
        <Controller
          name="item"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Item" fullWidth />
          )}
        />
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Category" fullWidth />
          )}
        />
        <ItemDescriptionField />
      </Stack>
    </Box>
  );
}
