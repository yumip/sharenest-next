import React from "react";
import {
  FieldValues,
} from "react-hook-form";
import { GridRenderEditCellParams, GridSingleSelectColDef, ValueOptions } from "@mui/x-data-grid";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useArrayFieldControllerByFormId } from "@/lib/hooks/general/useArrayFieldControllerByformId";

type DataGridSelectEditCellProps<T extends FieldValues> = {
  params: GridRenderEditCellParams;
};

export function DataGridSelectCell<T extends FieldValues>({
  params,
}: DataGridSelectEditCellProps<T>) {
   const controller = useArrayFieldControllerByFormId({
    formId: params.row.formId,
    fieldName: String(params.field),
  });
  
  if (!controller) return null;
  const {
      field,
      fieldState: { error },
    } = controller;
  const rawOptions = (params.colDef as GridSingleSelectColDef).valueOptions;
  const options: ValueOptions[] =
    typeof rawOptions === "function" ? rawOptions(params) : rawOptions || [];
  return (
    <Select
      {...field}
      onChange={(e: SelectChangeEvent) => field.onChange(e.target.value)}
      size="small"
      fullWidth
      error={!!error}
    >
      {options.map((opt) =>
        typeof opt === "object" ? (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ) : (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ),
      )}
    </Select>
  );
}
