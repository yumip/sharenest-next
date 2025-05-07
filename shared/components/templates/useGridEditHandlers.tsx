import { UserFormShape } from "@/app/platform/(admin)/users/components/columns";
import { mapFormRowToPatchUser } from "@/shared/features/users/utils/mapFormRowToPatchUser";
import {
  GridCellEditStopParams,
  GridCellEditStopReasons,
  GridRowId,
} from "@mui/x-data-grid";
import { UseMutationResult } from "@tanstack/react-query";
import {
  FieldArrayWithId,
  UseFieldArrayUpdate,
  UseFormTrigger,
} from "react-hook-form";

export function useGridEditHandlers<T extends { id: GridRowId }>(
  fields: T[],
  update: UseFieldArrayUpdate<any>,
  trigger: UseFormTrigger<any>,
  mutation: UseMutationResult<any, unknown, T, unknown>,
) {
  const processRowUpdate = async (newRow: T, oldRow: T): Promise<T> => {
    const index = fields.findIndex((row) => row.id === newRow.id);
    if (index === -1) return oldRow;

    update(index, newRow);
    const isValid = await trigger(`rows.${index}`);
    if (!isValid) return oldRow;

    try {
      const patchUser = mapFormRowToPatchUser(
        newRow as FieldArrayWithId<UserFormShape, "rows", "id">,
      );

      await mutation.mutateAsync(patchUser);
    } catch (err) {
      console.error("Mutation failed:", err);
      return oldRow; // Revert on error
    }

    return newRow;
  };

  return { processRowUpdate };
}
