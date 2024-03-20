import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Home from "../../pages/HomePage";
import { Outlet } from "react-router-dom";
import { useSettingContext } from "../../theme/SettingContext";

function DashboardLayout() {
  const { themeMode } = useSettingContext();
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position

    setScroll(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Stack sx={{ position: "fixed", top: 0, width: "100%" }}>
        <Header
          backgroundColor={
            scroll > 10
              ? themeMode == "light"
                ? "white"
                : "black"
              : "transparent"
          }
        />
      </Stack>
      <Outlet />
    </>
  );
}

export default DashboardLayout;
