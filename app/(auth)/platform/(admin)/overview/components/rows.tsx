import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

  export const summaryRows = [
    {
      formId: "totalUsers",
      icon: <PeopleIcon />,
      label: "Total Users",
      route: "/platform/users",
    },
    {
      formId: "totalItems",
      icon: <Inventory2Icon />,
      label: "Total Items",
      route: "/platform/items",
    },
    {
      formId: "borrowed",
      icon: <SyncAltIcon />,
      label: "Currently Borrowed",
      route: "/platform/items?status=borrowed",
    },
    {
      formId: "reserved",
      icon: <EventIcon />,
      label: "Reserved",
      route: "/platform/items?status=reserved",
    },
    {
      formId: "overdue",
      icon: <AccessTimeIcon />,
      label: "Overdue",
      route: "/platform/items?status=overdue",
    },
    {
      formId: "unavailable",
      icon: <DoNotDisturbIcon />,
      label: "Unavailable",
      route: "/platform/items?status=unavailable",
    },
  ];