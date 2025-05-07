"use client";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Metadata } from "next";
import { Inter } from "next/font/google";

if (process.env.NODE_ENV === "development") {
  import("@/mocks").then(({ startMockServiceWorker }) => {
    startMockServiceWorker();
  });
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = "ShareNest";
const description =
  "The Platforms Starter Kit is a full-stack Next.js app with multi-tenancy and custom domain support. Built with Next.js App Router, Vercel Postgres and the Vercel Domains API.";
const image = `${process.env.NEXT_PUBLIC_BASE_URL}/og.png`;

// export const metadata: Metadata = {
//   title,
//   description,
//   icons: "/favicon.ico",
//   openGraph: {
//     title,
//     description,
//     images: [image],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title,
//     description,
//     images: [image],
//     creator: "@yumiypatton",
//   },
//   metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
