import { DashboardStats } from "@/shared/types/stats";
import { METHOD_TYPE, RequestFactory } from ".";

//#region Fetch methods
export const fetchSummaryByGroupId = async ({
  groupId,
}: {
  groupId: string;
}): Promise<DashboardStats> => {
  console.log(groupId, "fetchSummaryByGroupId");
  const getSummaryRequest = RequestFactory.createRequest(
    METHOD_TYPE.GET,
    `api/dashboard/summary/${groupId}`,
  );
  return fetch(getSummaryRequest).then((response) => response.json());
};
