import { fetchUsersByGroupId } from "@/lib/api/user";
import { useQuery } from "@tanstack/react-query";

export const useFetchUsersByGroupId = ({
  groupId,
  queryString,
}: {
  groupId: string;
  queryString?: string;
}) => {
  return useQuery({
    queryKey: ["user", groupId, queryString],
    queryFn: () => fetchUsersByGroupId({ groupId, queryString }),
    enabled: !!groupId,
  });
};
