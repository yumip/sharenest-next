"use client";

import { useRouter } from "next/navigation";
import Table from "../../templates/Table";
import { columns } from "./columns";
import { useFetchSummaryByGroupId } from "@/lib/hooks/queries/summary";
import { Skeleton } from "@mui/material";
import { summaryRows } from "./rows";

export default function OverViewTable() {
  const router = useRouter();
  const { data } = useFetchSummaryByGroupId({ groupId: "cassiegroup" });

  if (!data) return <Skeleton />;
  const stats = data.stats;
  // Inject dynamic values into the rows
  const updatedSummaryRows = summaryRows.map((row) => ({
    ...row,
    value: stats[row.formId as keyof typeof stats] ?? 0,
  }));
  console.log(updatedSummaryRows.toString())
  return (
    <Table
      title={"Dashboard Summary"}
      rows={updatedSummaryRows}
      columns={columns}
      hideFooter
      disableColumnFilter
      onRowClick={(params) => {
        const route = params.row.route;
        if (route) router.push(route);
      }}
    />
  );
}
