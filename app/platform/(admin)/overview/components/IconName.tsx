import { Box } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

const IconName = (params: GridRenderCellParams) => {
  return <Box>{params.value}</Box>;
};

export default IconName;
