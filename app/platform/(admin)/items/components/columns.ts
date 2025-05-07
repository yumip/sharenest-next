import { GridColDef } from "@mui/x-data-grid";
import DeleteButton from "../../templates/DeleteButton";
import ItemDetailsFormModal from "../forms/ItemDetailsFormModal";
import BorrowerCell from "./BorrewerCell";

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Item Name",
    flex: 1,
    editable: true,
    minWidth: 150,
  },
  {
    field: "category",
    headerName: "Category",
    editable: true,
    flex: 1,
    minWidth: 120,
  },
  {
    field: "status",
    headerName: "Status",
    editable: true,
    flex: 1,
    minWidth: 120,
    type: "singleSelect",
    valueOptions: [
      "available",
      "borrowed",
      "reserved",
      "overdue",
      "unavailable",
    ],
  },
  {
    field: "borrower",
    headerName: "Borrowed By",
    flex: 1,
    minWidth: 160,
    renderCell: BorrowerCell,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "details",
    headerName: "Details",
    sortable: false,
    filterable: false,
    minWidth: 150,
    renderCell: ItemDetailsFormModal,
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 150,
    renderCell: DeleteButton,
  },
];
