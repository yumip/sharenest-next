import { Status } from "@/shared/types/item";

export type Item = {
  name: string;
  category: string;
  imageUrl: string;
  description: string;
};

export type ItemCount = Record<Status | string, number>;
