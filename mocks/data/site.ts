import { Site } from "@/shared/types/site"; // or wherever your interface is

export const mockSites: Site[] = [
  {
    subdomain: "demo",
    customDomain: "sharenest.localhost",
    groupId: "group-001",
    logo: "/logo/demo.png",
    message404: "Oops! Demo page not found.",
  },
  {
    subdomain: "cassie",
    customDomain: null,
    groupId: "group-002",
    logo: "/logo/cassie.png",
    message404: "This nest isn’t here — Cassie might’ve moved it!",
  },
];
