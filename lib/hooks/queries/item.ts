import { fetchItemsByGroupId } from "@/lib/api/items";
import { useQuery } from "@tanstack/react-query";

export const useFetchItemsByGroupId = ({
  groupId,
  queryString,
}: {
  groupId: string;
  queryString?: string;
}) => {
  return useQuery({
    queryKey: ["items", groupId, queryString],
    queryFn: () => fetchItemsByGroupId({ groupId, queryString }),
    enabled: !!groupId,
  });
};
