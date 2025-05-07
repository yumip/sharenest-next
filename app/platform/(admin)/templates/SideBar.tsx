"use client";

import Link from "next/link";
import PeopleIcon from "@mui/icons-material/People";
import ViewListIcon from "@mui/icons-material/ViewList";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import Drawer from "@mui/material/Drawer";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LogoutButton from "@/shared/components/templates/logout-button";

const drawerWidth = 240;

export default function SideBar() {
  const navItems = [
    {
      name: "Overview",
      href: "/platform",
      icon: <DashboardIcon width={18} />,
    },
    {
      name: "Users",
      href: "/platform/users",
      icon: <PeopleIcon width={18} />,
    },
    {
      name: "Items",
      href: `/platform/items`,
      icon: <ViewListIcon width={18} />,
    },
    {
      name: "Settings",
      href: `/platform/settings`,
      icon: <SettingsIcon width={18} />,
    },
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <ListItem key={item.name} disablePadding>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <LogoutButton />
    </Drawer>
  );
}
