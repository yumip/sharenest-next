import { GridRenderCellParams } from "@mui/x-data-grid";
import Metric from "../../templates/Metric";

const BorrowedItemMetric = (params: GridRenderCellParams) => {
  console.log(params.row.id);
  return (
    <Metric
      value={params.value}
      href={`platform/items?status=borrowed&borrowerId=${params.row.id}`}
    />
  );
};

export default BorrowedItemMetric;
