import { GridColDef } from "@mui/x-data-grid";
import DeleteButton from "../../templates/DeleteButton";
import ItemDetailsFormModal from "../forms/ItemDetailsFormModal";
import BorrowerCell from "./BorrewerCell";
import { DataGridEditCell } from "@/shared/components/atoms/DataGridEditCell";
import { ItemFormShape } from "@/shared/features/items/schema/itemFormSchema";
import { DataGridSelectCell } from "@/shared/components/atoms/DataGridSelectCell";
import { ItemStatus } from "@/shared/types/item";

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Item Name",
    flex: 1,
    editable: true,
    minWidth: 150,
    renderEditCell: (params) => <DataGridEditCell<ItemFormShape> params={params} />,
  },
  {
    field: "category",
    headerName: "Category",
    editable: true,
    flex: 1,
    minWidth: 120,
    renderEditCell: (params) => <DataGridEditCell<ItemFormShape> params={params} />,
  },
  {
    field: "status",
    headerName: "Status",
    editable: true,
    flex: 1,
    minWidth: 120,
    type: "singleSelect",
    valueOptions: [
      { value: ItemStatus.Available, label: "Available" },
      { value: ItemStatus.Borrowed, label: "Borrowed" },
      { value: ItemStatus.Reserved, label: "Reserved" },
      { value: ItemStatus.Overdue, label: "Overdue" },
      { value: ItemStatus.Unavailable, label: "Unavailable" },
    ],
    renderEditCell: (params) => <DataGridSelectCell<ItemFormShape> params={params} />,
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
