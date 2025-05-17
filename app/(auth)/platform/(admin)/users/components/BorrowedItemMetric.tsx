import { GridRenderCellParams } from "@mui/x-data-grid";
import Metric from "../../templates/Metric";

const BorrowedItemMetric = (params: GridRenderCellParams) => {
  return (
    <Metric
      value={params.value}
      href={`items?status=borrowed&borrowerId=${params.row.id}`}
    />
  );
};

export default BorrowedItemMetric;
