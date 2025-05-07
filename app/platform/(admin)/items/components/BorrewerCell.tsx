import { Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

type DetailsFormProps = {
  defaultValues: any; //ItemDetailFormData
  onSubmit: (data: any) => void;
};

const BorrowerCell = (params: GridRenderCellParams) => {
  return <>{params?.value?.name && params.value.name}</>;
};

export default BorrowerCell;
