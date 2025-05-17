import { Item, ItemStatus } from "@/shared/types/item";
import { Writable } from "@/shared/types/utils";

export type ItemCount = Record<ItemStatus | string, number>;
export type PatchItemRequest = Writable<Item>;