import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Home from "../../pages/HomePage";
import { Outlet } from "react-router-dom";
import { useSettingContext } from "../../theme/SettingContext";

function DashboardLayout() {
  return (
    <Stack style={{ width: "100%", overflow: "clip" }}>
      <Outlet />
    </Stack>
  );
}

export default DashboardLayout;
