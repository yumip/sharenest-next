"use client";

import { SecureRoute } from "@/shared/components/auth/SecureRoute";
import { SessionProvider } from "next-auth/react";
// import { ModalProvider } from "@/components/modal/provider";
import { SnackbarProvider } from "notistack";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {/* <SecureRoute allowedRoles={["admin"]}> */}
      <SnackbarProvider>
        {/* <ModalProvider>{children}</ModalProvider> */}
        {children}
      </SnackbarProvider>
      {/* </SecureRoute> */}
    </SessionProvider>
  );
}
