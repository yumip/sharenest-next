import { notFound, redirect } from "next/navigation";
import { ReactNode } from "react";
import { Container } from "@mui/material";
import { getSiteData } from "@/lib/fetchers";

export default async function SiteLayout({
  params,
  children,
}: {
  params: { domain: string };
  children: ReactNode;
}) {
  const domain = decodeURIComponent(params.domain);
  const data = await getSiteData(domain);

  if (!data) notFound();

  if (
    domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) &&
    data.customDomain &&
    process.env.REDIRECT_TO_CUSTOM_DOMAIN_IF_EXISTS === "true"
  ) {
    return redirect(`https://${data.customDomain}`);
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {children}
    </Container>
  );
}
