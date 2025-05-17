import { http, HttpResponse } from "msw";
import { mockSummary } from "../data/summary";

const summary = mockSummary;
export const summaryHandlers = [
  // GET /api/users
  http.get("/api/:groupId/dashboard/summary", ({ params }) => {
    const { groupId } = params;

    const summaryByGroup = summary.find((user) => user.groupId === groupId);

    return HttpResponse.json(summaryByGroup);
  }),
];
