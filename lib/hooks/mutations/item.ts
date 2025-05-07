import { fetchAndParse, METHOD_TYPE, RequestFactory } from "@/lib/api";
import { createItem, updateItem } from "@/lib/api/items";
import { CreateItemDTO } from "@/lib/models/itemModel";
import { Item } from "@/shared/types/item";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateItem = () => {
  return useMutation<Item, unknown, CreateItemDTO>({
    mutationFn: (variables) => createItem({ createItemRequest: variables }),
  });
};

export const usePatchItem = () => {
  const queryClient = useQueryClient();

  return useMutation<Item, unknown, Item>({
    mutationFn: (variables) => updateItem({ updateItemRequest: variables }),
    onSuccess: (data) =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["item", data.groupId],
          exact: true,
        }),
        queryClient.invalidateQueries({
          queryKey: ["item", data.groupId, data.id],
          exact: true,
        }),
      ]),
  });
};

// This is for Image upload
//   export const usePutImageUpload = () => {

//     return useMutation({
//       mutationFn: async ({ image, countryCode }: PutImageRequest) => {
//         const { uploadUrl, filename } = await getImagePreSignedUrl({
//           filename: image.name,
//         });

//         const request = RequestFactory.createRequest(
//           METHOD_TYPE.PUT,
//           uploadUrl,
//           {
//             body: new Blob([image], { type: image.type }),
//             headers: {
//               "Content-Type": image.type,
//             },
//           },
//           "",
//         );

//         await fetchAndParse(request);
//         return `${CLOUDFRONT_ASSET_BASE_URL}/${filename}`;
//       },
//     });
//   };
