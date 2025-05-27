"use client";

import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridRowParams,
  MuiEvent,
} from "@mui/x-data-grid";
import { Box, Typography, Skeleton } from "@mui/material";
import AddButton from "./AddButton";
import { FieldArray } from "react-hook-form";
import { FormWithRows } from "@/shared/types/form";

type tableProps = {
  title: string;
  columns: GridColDef[];
  href?: string;
  onRowClick?: (
    params: GridRowParams,
    event: MuiEvent<React.MouseEvent>,
  ) => void;
  pageSizeOptions?: number[];
  disableColumnFilter?: boolean;
  hideFooter?: boolean;
  loading?: boolean;
  showToolbar?: boolean;
  rows?: object[];
  fields?: FieldArray<FormWithRows, "rows">[];
  createForm?: React.ReactNode;
  processRowUpdate?: (
    newRow: any,
    oldRow: any,
    params: {
      rowId: GridRowId;
    },
  ) => any;
};

export default function Table({
  title,
  columns,
  onRowClick,
  processRowUpdate,
  fields,
  rows,
  hideFooter = true,
  disableColumnFilter = true,
  loading = false,
  pageSizeOptions = [25],
  showToolbar = false,
  createForm,
}: tableProps) {
  return (
    <Box sx={{ height: 400, width: "100%", mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {!!createForm && <AddButton>{createForm}</AddButton>}
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[...Array(6)].map((_, i) => (
            <Skeleton variant="rectangular" height={50} key={i} />
          ))}
        </Box>
      ) : (
        <DataGrid
          columns={columns}
          rows={fields ?? rows}
          hideFooter={hideFooter}
          disableColumnFilter={disableColumnFilter}
          disableColumnMenu
          getRowId={(row) => row.formId} 
          processRowUpdate={processRowUpdate}
          onRowClick={onRowClick}
          editMode="row"
          pageSizeOptions={pageSizeOptions}
          showToolbar={showToolbar}
          sx={{
            "& .MuiDataGrid-cell": { py: 1 },
            borderRadius: 2,
            boxShadow: 1,
          }}
        />
      )}
    </Box>
  );
}
