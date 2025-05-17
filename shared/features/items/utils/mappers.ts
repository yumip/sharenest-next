
import type { FieldArray } from "react-hook-form";
import { ItemFormShape } from "../schema/itemFormSchema";
import { Item } from "@/shared/types/item";
import { PatchItemRequest } from "../schema/itemTypes";

export const mapFormRowToPatchItem = (
  row: FieldArray<ItemFormShape, "rows">,
): PatchItemRequest => ({
    id: row.formId,
    name: row.name,
    category: row.category,
    status: row.status,
    imageUrl: row.imageUrl,
    description: row.description,
    borrower:!!row.borrower ? { 
        id: row.borrower.id,
        name: row.borrower.name,
    } : undefined,
    groupId: "cassiegroup",
});

export const mapFetchItemToFormRow = (
  item: Item,
): FieldArray<ItemFormShape, "rows"> => ({
    formId: item.id,
    name: item.name,
    category: item.category,
    status: item.status,
    imageUrl: item.imageUrl,
    description: item.description,
    borrower:!!item.borrower ? { 
        id: item.borrower.id,
        name: item.borrower.name,
    } : undefined,
    dueDate: item.dueDate ? new Date(item.dueDate).toISOString() : undefined,
});