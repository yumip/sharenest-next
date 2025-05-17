import { PatchUserRequest } from "@/shared/features/users/schema/userTypes";
import { METHOD_TYPE, RequestFactory, fetchAndParseJson } from "./index";
import { User } from "@/shared/types/user";

//#region Fetch methods
export const fetchUsersByGroupId = async ({
  groupId,
  queryString,
}: {
  groupId: string;
  queryString?: string;
}): Promise<User[]> => {
  const getAllUsersRequest = RequestFactory.createRequest(
    METHOD_TYPE.GET,
    `api/${groupId}/users/${queryString ? queryString : ""}`,
  );
  return fetch(getAllUsersRequest).then((response) => response.json());
};

export const createUser = ({
  createUserRequest,
}: {
  createUserRequest: User;
}): Promise<User> => {
  const { groupId } = createUserRequest;
  const request = RequestFactory.createRequest<User>(
    METHOD_TYPE.POST,
    `api/${groupId}/users`,
    {
      body: JSON.stringify(createUserRequest),
    },
  );

  return fetchAndParseJson(request);
};

export const updateUser = ({
  updateUserRequest,
}: {
  updateUserRequest: PatchUserRequest;
}): Promise<User> => {
  const { groupId, id } = updateUserRequest;
  const request = RequestFactory.createRequest<User>(
    METHOD_TYPE.PATCH,
    `api/${groupId}/users/${id}`,
    {
      body: JSON.stringify(updateUserRequest),
    },
  );

  return fetchAndParseJson<User>(request);
};

//TODO

// export const getImagePreSignedUrl = ({
//   filename,
// }: ImageUploadRequest): Promise<ImageUploadResponse> => {
//   const request = RequestFactory.createRequest(
//     METHOD_TYPE.GET,
//     `/upload/url?filename=${filename}`,
//   );

//   return fetchAndParseJson(request);
// };
