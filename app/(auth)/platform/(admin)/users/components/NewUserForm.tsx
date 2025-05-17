import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import RoleSelect from "./RoleSelect";
type NewUserFormProps = {
  defaultValues: any; //ItemDetailFormData
  onSubmit: (data: any) => void;
};
export default function NewUserForm({
  defaultValues,
  onSubmit,
}: NewUserFormProps) {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={3}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="First Name" fullWidth />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Last Name" fullWidth />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Email" fullWidth />
          )}
        />
        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Mobile" fullWidth />
          )}
        />
        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Mobile" fullWidth />
          )}
        />
        <Controller
          name="role"
          control={control}
          render={({ field }) => <RoleSelect />}
        />
      </Stack>
    </Box>
  );
}
