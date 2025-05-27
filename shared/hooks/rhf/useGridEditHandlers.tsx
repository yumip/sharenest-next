import {
  GridRowId,
} from "@mui/x-data-grid";
import { UseMutationResult } from "@tanstack/react-query";
import {
  UseFieldArrayUpdate,
  UseFormTrigger,
} from "react-hook-form";

export function useGridEditHandlers<TFormRow, TEntity extends { id: GridRowId }>(
  update: UseFieldArrayUpdate<any>,
  trigger: UseFormTrigger<any>,
  getValues: () => { rows: TFormRow[] },
  mutation: UseMutationResult<any, unknown, TEntity, unknown>,
  mapRow: (row: TFormRow) => TEntity
) {
  const processRowUpdate = async (newRow: TFormRow, oldRow: TFormRow): Promise<TFormRow> => {
    const index = getValues().rows.findIndex((row: any) => row.formId === (newRow as any).formId);
    if (index === -1) return oldRow;
    const updatedRow = {...oldRow, ...getValues().rows[index]}
    update(index, updatedRow);

    const isValid = await trigger(`rows.${index}`);
    if (!isValid) return oldRow;

    try {
      const entityRow = mapRow(updatedRow);
      await mutation.mutateAsync(entityRow);
    } catch (err) {
      return oldRow; // Revert on error
    }

    return updatedRow;
  };

  return { processRowUpdate };
}
