"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl } from "@mui/material";

export default function RoleSelect() {
  const [role, setRole] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="user-role-label">Role</InputLabel>
      <Select
        labelId="user-role-label"
        id="demo-simple-select-autowidth"
        value={role}
        onChange={handleChange}
        autoWidth
        label="Role"
      >
        <MenuItem value={"admin"}>Admin</MenuItem>
        <MenuItem value={"user"}>User</MenuItem>
      </Select>
    </FormControl>
  );
}
