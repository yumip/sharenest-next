"use client";

import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <Button
      onClick={() => signOut()}
      startIcon={<LogoutIcon />}
      variant="text"
      size="small"
      sx={{
        color: "text.primary",
        textTransform: "none",
        px: 1.5,
        py: 0.75,
        "&:hover": {
          backgroundColor: "action.hover",
        },
        "&:active": {
          backgroundColor: "action.selected",
        },
      }}
    >
      Logout
    </Button>
  );
}
