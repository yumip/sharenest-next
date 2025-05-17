import { GridColDef } from "@mui/x-data-grid";
import IconName from "./IconName";

export const columns: GridColDef[] = [
  {
    field: "icon",
    headerName: "",
    width: 60,
    renderCell: IconName,
    sortable: false,
    filterable: false,
  },
  {
    field: "label",
    headerName: "Metric",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "value",
    headerName: "Count",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
];
