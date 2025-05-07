import { createUser, updateUser } from "@/lib/api/user";
import { PatchUserRequest } from "@/shared/features/users/schema/userTypes";
import { User } from "@/shared/types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateUser = () => {
  return useMutation<User, unknown, User>({
    mutationFn: (variables) => createUser({ createUserRequest: variables }),
  });
};

export const usePatchUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, unknown, PatchUserRequest>({
    mutationFn: (variables) => updateUser({ updateUserRequest: variables }),
    onSuccess: (data) =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["user", data.groupId],
          exact: true,
        }),
        queryClient.invalidateQueries({
          queryKey: ["user", data.groupId, data.id],
          exact: true,
        }),
      ]),
  });
};
