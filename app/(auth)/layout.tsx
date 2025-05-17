'use client'
import { Box } from "@mui/material";

if (process.env.NODE_ENV === "development") {
  import("@/mocks").then(({ startMockServiceWorker }) => {
    startMockServiceWorker();
  });
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <Box>{children}</Box>
  );
}