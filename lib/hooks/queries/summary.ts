import { fetchSummaryByGroupId } from "@/lib/api/summary";
import { useQuery } from "@tanstack/react-query";

export const useFetchSummaryByGroupId = ({ groupId }: { groupId: string }) => {
  return useQuery({
    queryKey: ["summary", groupId],
    enabled: !!groupId,
    queryFn: async () => {
      try {
        const data = await fetchSummaryByGroupId({ groupId });
        console.log("Summary data:", data);
        return data;
      } catch (e) {
        console.error(e);
        console.error("Failed to fetch summary:", e);
      }
    },
  });
};
