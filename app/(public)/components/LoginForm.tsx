"use client";
import { Button, TextField, Typography, Box, Divider } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function HomePage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log("res");
    if (res?.ok) {
      router.push("/platform"); // or redirect by role
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message as string}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message as string}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Log In
        </Button>
      </Box>

      <Divider sx={{ my: 4 }}>or</Divider>

      <Box textAlign="center">
        <Typography variant="body2" mb={1}>
          Don’t have a Nest yet?
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => router.push("/create-nest")}
        >
          Create a New Nest
        </Button>
      </Box>
    </>
  );
}
