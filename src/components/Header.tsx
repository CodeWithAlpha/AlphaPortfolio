import { Button, Stack, Typography, styled } from "@mui/material";
import CustomButton from "./button/CustomButton";
import { useSettingContext } from "../theme/SettingContext";
import { LightMode } from "../assets/Icons/Lightmode";
import { Darkmode } from "../assets/Icons/Darkmode";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDiamensions";
import { Hamburger } from "../assets/Icons/hanburger";
import { CloseIcon } from "../assets/Icons/CloseIcon";

function Header({ backgroundColor, scrollTo }: any) {
  const { themeMode, onToggleMode } = useSettingContext();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skill", id: "skill" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const { height, width } = useWindowDimensions();

  if (width < 800) {
    return (
      <>
        <Stack
          sx={{ backgroundColor: backgroundColor }}
          px={2}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography color={"primary.main"} variant="h3">
            Alpha
          </Typography>

          <Stack height={{ xs: 40, md: 80 }} alignItems={"end"}>
            <Hamburger onClick={() => setOpen(!open)} />
          </Stack>
        </Stack>
        <AnimatePresence>
          {open && (
            <Stack
              component={motion.div}
              sx={{
                height: "100vh",
                width: "80%",
                bgcolor: "#f6f5f1",
                borderLeft: "1px solid #e0e0e0",
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 1000,
              }}
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CloseIcon onClick={() => setOpen(!open)} />
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                gap={1}
                sx={{ overflow: "clip" }}
              >
                {navbar.map((item, index) => {
                  return (
                    <Typography
                      color={
                        active == item.id ? "primary.main" : "text.secondary"
                      }
                      // variant={active == item.id ? "h6" : "subtitle1"}
                      onClick={() => {
                        scrollTo(item.id);
                        setActive(item.id);
                        setOpen(!open);
                      }}
                      sx={{ cursor: "pointer", fontSize: 30 }}
                      component={motion.div}
                      initial={{ x: "100vw" }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, delay: index / 7 + 0.1 }}
                    >
                      {item.name}
                    </Typography>
                  );
                })}
              </Stack>
            </Stack>
          )}
        </AnimatePresence>
      </>
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
