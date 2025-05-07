"use client";

import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { useRouter } from "next/navigation";
import Table from "../../templates/Table";
import { columns } from "./columns";
import { useFetchSummaryByGroupId } from "@/lib/hooks/queries/summary";
import { Skeleton } from "@mui/material";
import { mockSummary } from "@/mocks/data/summary";

export default function OverViewTable() {
  const router = useRouter();
  const { data } = useFetchSummaryByGroupId({ groupId: "cassiegroup" });
  // const data = mockSummary;
  const summaryRows = [
    {
      id: "totalUsers",
      icon: <PeopleIcon color="primary" />,
      label: "Total Users",
      route: "/platform/users",
    },
    {
      id: "totalItems",
      icon: <Inventory2Icon color="primary" />,
      label: "Total Items",
      route: "/platform/items",
    },
    {
      id: "borrowed",
      icon: <SyncAltIcon color="primary" />,
      label: "Currently Borrowed",
      route: "/platform/items?status=borrowed",
    },
    {
      id: "reserved",
      icon: <EventIcon color="primary" />,
      label: "Reserved",
      route: "/platform/items?status=reserved",
    },
    {
      id: "overdue",
      icon: <AccessTimeIcon color="primary" />,
      label: "Overdue",
      route: "/platform/items?status=overdue",
    },
    {
      id: "unavailable",
      icon: <DoNotDisturbIcon color="primary" />,
      label: "Unavailable",
      route: "/platform/items?status=unavailable",
    },
  ];
  if (!data) return <Skeleton />;
  const stats = data.stats;
  // Inject dynamic values into the rows
  const updatedSummaryRows = summaryRows.map((row) => ({
    ...row,
    value: stats[row.id as keyof typeof stats] ?? 0,
  }));

  return (
    <Table
      title={"Dashboard Summary"}
      items={updatedSummaryRows}
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
