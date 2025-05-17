import { FormValues } from "@/shared/types/form";
import { ItemStatus } from "@/shared/types/item";
import { z } from "zod";

export const itemSchema = z.object({
  formId: z.string().uuid(), // assuming each item has a UUID
  name: z.string().min(1, 'Item name is required'),
  category: z.string().min(1, 'Category is required'),
  status: z.nativeEnum(ItemStatus),
  imageUrl: z.string().optional(),
  description: z.string().optional(),
  borrower: z.object({
    id: z.string(),
    name: z.string(),
  })
  .optional(), 
  dueDate: z.string().optional().refine(
    (val) => !val || !Number.isNaN(Date.parse(val)),
    { message: "Invalid date string" }
  ),  // ISO string; can be date later
});

export type ItemForm = z.infer<typeof itemSchema>;
export type ItemFormShape = FormValues<ItemForm>;