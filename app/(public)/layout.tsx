import { Box } from "@mui/material";
import { ReactNode } from "react";
import TopBar from "./components/TopBar";
import { getSiteData } from "@/lib/fetchers";
import { Metadata } from "next";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("@/mocks").then(({ startMockServiceWorker }) => {
    startMockServiceWorker();
  });
}
export async function generateMetadata({
  params,
}: {
  params: { domain: string };
}): Promise<Metadata | null> {
  const domain = decodeURIComponent(params.domain);
  const data = await getSiteData(domain);
  if (!data) return null;

  const {
    name: title,
    description,
    image,
    logo,
  } = data as unknown as {
    name: string;
    description: string;
    image: string;
    logo: string;
  };

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@vercel",
    },
    icons: [logo],
    metadataBase: new URL(`https://${domain}`),
  };
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <TopBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
