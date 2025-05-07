"use client";
// mocks/index.ts
import { itemHandlers } from "./handlers/itemHandlers";
import { userHandlers } from "./handlers/userHandlers";
import { domainHandlers } from "./handlers/domainHandlers";
import { summaryHandlers } from "./handlers/summaryHandler";
import { setupWorker } from "msw/browser";

export const startMockServiceWorker = () => {
  if (typeof window === "undefined") {
    console.log("[MSW] Skipped — window is undefined (SSR)");
    return;
  }

  const worker = setupWorker(
    ...itemHandlers,
    ...userHandlers,
    ...domainHandlers,
    ...summaryHandlers,
  );

  worker.start({
    onUnhandledRequest: "bypass",
  });

  console.log("[MSW] ✅ Service worker started");
};
