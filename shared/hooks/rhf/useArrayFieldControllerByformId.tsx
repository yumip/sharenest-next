import { FormWithRows } from "@/shared/types/form";
import { FieldPath, useController, useFieldArray, useFormContext } from "react-hook-form";

// TODO: Consider extracting this pattern into a custom hook
// like `useFieldArrayControllerById()` or `useGridFieldController()`
// once it's reused across other editable DataGrid tables (e.g. items, loans).
// For now, keeping it inline avoids premature abstraction.

export const useArrayFieldControllerByFormId = ({formId, fieldName}:{
    formId: string,
    fieldName: string,
  }) => {
  const { control } = useFormContext<FormWithRows>();
  const { fields } = useFieldArray<FormWithRows, 'rows'>({ control, name: 'rows' });
 
  const fieldIndex =  fields.findIndex((row) => row.formId === formId);

  const fieldPath =
    `rows.${fieldIndex}.${fieldName}` as FieldPath<FormWithRows>;;

  if (fieldIndex === -1) return null;

  return useController({ name: fieldPath, control });
};
