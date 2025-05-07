"use client";
import SideBar from "@/app/platform/(admin)/templates/SideBar";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [platformQueryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={platformQueryClient}>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </QueryClientProvider>
  );
}
