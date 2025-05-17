import { GridColDef } from "@mui/x-data-grid";
import BorrowedItemMetric from "./BorrowedItemMetric";
import DeleteButton from "../../templates/DeleteButton";
import { DataGridEditCell } from "@/shared/components/atoms/DataGridEditCell";
import { UserFormShape } from "@/shared/features/users/schema/userFormSchema";
import { DataGridSelectCell } from "@/shared/components/atoms/DataGridSelectCell";


export const columns: GridColDef[] = [
  {
    field: "firstName",
    headerName: "First Name",
    flex: 1,
    minWidth: 150,
    editable: true,
    renderEditCell: (params) => <DataGridEditCell<UserFormShape> params={params} />,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    flex: 1,
    minWidth: 150,
    editable: true,
    renderEditCell: (params) => <DataGridEditCell<UserFormShape> params={params} />,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    minWidth: 200,
    editable: true,
    renderEditCell: (params) => <DataGridEditCell<UserFormShape> params={params} />,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    flex: 1,
    minWidth: 200,
    editable: true,
    renderEditCell: (params) => <DataGridEditCell<UserFormShape> params={params} />,
  },
  {
    field: "role",
    headerName: "Role",
    editable: true,
    width: 120,
    type: "singleSelect",
    valueOptions: [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
    ],
    renderEditCell: (params) => <DataGridSelectCell<UserFormShape> params={params} />,
  },
  {
    field: "status",
    headerName: "Status",
    editable: true,
    width: 120,
    type: "singleSelect",
    valueOptions: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
    ],
    renderEditCell: (params) => <DataGridSelectCell<UserFormShape> params={params} />,
  },
  {
    field: "borrowedItems",
    headerName: "Borrowed Items",
    width: 150,
    sortable: false,
    filterable: false,
    renderCell: BorrowedItemMetric,
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 150,
    renderCell: DeleteButton,
  },
];
