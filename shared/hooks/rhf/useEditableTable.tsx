import {
  GridRowId,
} from "@mui/x-data-grid";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import {
  FieldArray,
  FieldValues,
  useFieldArray,
  UseFieldArrayUpdate,
  useForm,
  UseFormTrigger,
} from "react-hook-form";
import { useGridEditHandlers } from "./useGridEditHandlers";

export function useEditableTable<TFormRow, T, TEntity extends { id: GridRowId }>({
  
}
) {

  const methods = useForm<T>({
    defaultValues: { rows: [] },
    mode: "onBlur",
  });
  const { control, trigger, reset, getValues } = methods;
  const { fields, update } = useFieldArray({
    control,
    name: "rows",
  });
  const { processRowUpdate } = useGridEditHandlers<
  FieldArray<TFormRow>,
  TEntity extends { id: GridRowId }                               
>(
    update,
    trigger,
    getValues,
    updateUserMutation,
    mapFormRowToPatchUser
  );

  useEffect(() => {
    if (data?.length) {
        const defaultValues = data.map(row =>  mapFetchUserToFormRow(row)) as Object[];
      reset({ rows: defaultValues });
    }
  }, [data, reset]);

  };

  return { processRowUpdate };
}
