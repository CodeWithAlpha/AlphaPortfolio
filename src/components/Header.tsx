import { Button, Stack, Typography, styled } from "@mui/material";
import CustomButton from "./button/CustomButton";
import { useSettingContext } from "../theme/SettingContext";
import { LightMode } from "../assets/Icons/Lightmode";
import { Darkmode } from "../assets/Icons/Darkmode";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDiamensions";
import { Hamburger } from "../assets/Icons/hanburger";

function Header({ backgroundColor, scrollTo }: any) {
  const { themeMode, onToggleMode } = useSettingContext();
  const [active, setActive] = useState("home");

  const { height, width } = useWindowDimensions();

  if (width < 800) {
    return (
      <Stack sx={{ backgroundColor: backgroundColor }}>
        <Stack height={{ xs: 40, md: 80 }} alignItems={"end"}>
          <Hamburger />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack sx={{ backgroundColor: backgroundColor }}>
      <Stack
        width={"80%"}
        height={{ xs: 40, md: 80 }}
        margin={"auto"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography color={"primary.main"} variant="h6">
          Alpha
        </Typography>

        <Stack flexDirection={"row"} alignItems={"center"} gap={5}>
          <Typography
            color={active == "home" ? "primary.main" : "text.secondary"}
            variant={active == "home" ? "h6" : "subtitle1"}
            onClick={() => {
              scrollTo("home");
              setActive("home");
            }}
            sx={{ cursor: "pointer" }}
          >
            Home
          </Typography>
          <Typography
            color={active == "about" ? "primary.main" : "text.secondary"}
            variant={active == "about" ? "h6" : "subtitle1"}
            onClick={() => {
              scrollTo("about");
              setActive("about");
            }}
            sx={{ cursor: "pointer" }}
          >
            About
          </Typography>
          <Typography
            color={active == "skill" ? "primary.main" : "text.secondary"}
            variant={active == "skill" ? "h6" : "subtitle1"}
            onClick={() => {
              scrollTo("skill");
              setActive("skill");
            }}
            sx={{ cursor: "pointer" }}
          >
            Skill
          </Typography>
          <Typography
            color={active == "project" ? "primary.main" : "text.secondary"}
            variant={active == "project" ? "h6" : "subtitle1"}
            onClick={() => {
              scrollTo("project");
              setActive("project");
            }}
            sx={{ cursor: "pointer" }}
          >
            Project
          </Typography>
          <Typography
            color={active == "contact" ? "primary.main" : "text.secondary"}
            variant={active == "contact" ? "h6" : "subtitle1"}
            onClick={() => {
              scrollTo("contact");
              setActive("contact");
            }}
            sx={{ cursor: "pointer" }}
          >
            Contact
          </Typography>
          <CustomButton variant="outlined">Download CV</CustomButton>
          <Stack onClick={onToggleMode}>
            {themeMode == "dark" ? <LightMode /> : <Darkmode />}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
