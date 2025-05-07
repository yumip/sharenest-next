"use client";

import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRowId,
  GridRowParams,
  MuiEvent,
} from "@mui/x-data-grid";
import { Box, Typography, Skeleton } from "@mui/material";
import AddButton from "./AddButton";

type tableProps = {
  title: string;
  items: Object[];
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
  items,
  columns,
  onRowClick,
  processRowUpdate,
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
          rows={items}
          columns={columns}
          hideFooter={hideFooter}
          disableColumnFilter={disableColumnFilter}
          disableColumnMenu
          processRowUpdate={processRowUpdate}
          onRowClick={onRowClick}
          editMode="cell"
          pageSizeOptions={pageSizeOptions}
          showToolbar={showToolbar}
          getRowId={(row) => row.id}
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
