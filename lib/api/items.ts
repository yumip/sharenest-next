import { METHOD_TYPE, RequestFactory, fetchAndParseJson } from "./index";
import { Item } from "@/shared/types/item";
import {
  CreateItemDTO,
  ImageUploadRequest,
  ImageUploadResponse,
} from "../models/itemModel";

//#region Fetch methods
export const fetchItemsByGroupId = async ({
  groupId,
  queryString,
}: {
  groupId: string;
  queryString?: string;
}): Promise<Item[]> => {
  const getAllItemsRequest = RequestFactory.createRequest(
    METHOD_TYPE.GET,
    `api/${groupId}/items/${queryString ? queryString : ""}`,
  );
  console.log(queryString);
  console.log(`api/${groupId}/items/${queryString ? queryString : ""}`);
  return fetch(getAllItemsRequest).then((response) => response.json());
};

export const createItem = ({
  createItemRequest,
}: {
  createItemRequest: CreateItemDTO;
}): Promise<Item> => {
  const { groupId } = createItemRequest;
  const request = RequestFactory.createRequest<Item>(
    METHOD_TYPE.POST,
    `api/${groupId}/items`,
    {
      body: JSON.stringify(createItemRequest),
    },
  );

  return fetchAndParseJson(request);
};

export const updateItem = ({
  updateItemRequest,
}: {
  updateItemRequest: Item;
}): Promise<Item> => {
  const { groupId, id } = updateItemRequest;
  const request = RequestFactory.createRequest<Item>(
    METHOD_TYPE.PATCH,
    `api/${groupId}/items/${id}`,
    {
      body: JSON.stringify(updateItemRequest),
    },
  );

  return fetchAndParseJson<Item>(request);
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
