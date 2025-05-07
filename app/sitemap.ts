import { headers } from "next/headers";

export default async function Sitemap() {
  const headersList = headers();
  const domain =
    headersList
      .get("host")
      ?.replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) ??
    "sharenest.com"; // whatever it is deployed to vercel

  const publicPaths = [
    "", // homepage
    "about",
    "how-it-works",
  ];

  const staticRoutes = publicPaths.map((path) => ({
    url: `https://${domain}/${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes];
}
