import { Item } from "@/shared/types/item";

export type CreateItemDTO = Omit<Item, "id">;

export type ImageUploadRequest = {
  filename: string;
};

export type ImageUploadResponse = {
  uploadUrl: string;
  filename: string;
};
