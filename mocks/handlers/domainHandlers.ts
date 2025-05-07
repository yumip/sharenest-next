import { http, HttpResponse } from "msw";
import { mockSites } from "../data/site";

export const domainHandlers = [
  http.get("/api/site", async ({ request }) => {
    const host = request.headers.get("host") || "";
    const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "sharenest.app";

    const matchedSite = mockSites.find((site) => {
      const fullSubdomain = site.subdomain
        ? `${site.subdomain}.${rootDomain}`
        : null;
      return site.customDomain === host || fullSubdomain === host;
    });

    if (!matchedSite) {
      return HttpResponse.json({ message: "Site not found" }, { status: 404 });
    }

    return HttpResponse.json(matchedSite);
  }),
];
