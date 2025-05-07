"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function SecureRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: string[];
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    const role = session?.user?.role;

    if (!role || !allowedRoles.includes(role)) {
      router.push("/"); // Or `/not-authorised`
    }
  }, [status, session, allowedRoles, router]);

  if (status === "loading") return <p>Loading...</p>;
  return <>{children}</>;
}
