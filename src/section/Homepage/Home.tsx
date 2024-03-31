import React, { ReactNode } from "react";
import lightHomeImage from "../../assets/lightHomePg.jpg";
import darkHomeImage from "../../assets/darkHomeBG.png";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import CustomButton from "../../components/button/CustomButton";
import { Linkedin } from "../../assets/Icons/Linkedin";
import homeAvatar from "../../assets/avatar.png";
import { useSettingContext } from "../../theme/SettingContext";
import reactLogo from "../../assets/skills/logo/react.svg";
import htmlLogo from "../../assets/skills/logo/JavaScript-logo.png";
import jsLogo from "../../assets/skills/logo/html.svg";

//framer motion
import { AnimatePresence, motion, useTime, useTransform } from "framer-motion";
import useWindowDimensions from "../../components/hooks/useWindowDiamensions";

function Home() {
  const { themeMode } = useSettingContext();
  const theme = useTheme();

  const { height, width } = useWindowDimensions();

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${
          themeMode == "light" ? lightHomeImage : darkHomeImage
        })`,
      }}
      pt={8}
    >
      <Stack
        flexDirection={{ xs: "column-reverse", md: "row" }}
        justifyContent="center"
        width={{ xs: "95%", md: "80%" }}
        margin={"auto"}
      >
        <Stack gap={1} mt={2} flexBasis={"50%"}>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: { xs: 20, md: 40 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Hello I'm
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 38, md: 60 },
              fontWeight: 600,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Sharad Choudhary
          </Typography>
          <Typography sx={{ fontSize: 32 }}>
            A{" "}
            <span style={{ color: theme.palette.success.main }}>
              Creative Developer{" "}
            </span>{" "}
            From <span style={{ color: "#8068f0" }}> Noida </span>
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 20,
              width: { xs: "95%", md: "70%" },
            }}
          >
            I'm creative Developer based in Noida, and I'm very passionate and
            dedicated to my work.
          </Typography>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            // justifyContent={"space-between"}
            gap={4}
            my={5}
          >
            <CustomButton variant="contained">About Me</CustomButton>
            <Linkedin />
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          sx={{ position: "relative" }}
          flexBasis={"50%"}
        >
          <motion.img src={homeAvatar} width={"70%"} />
          <motion.img
            src={htmlLogo}
            style={{
              position: "absolute",
              top: 5,
              left: 5,
              width: width < 600 ? 50 : 100,
            }}
            initial={{ y: -10 }}
            animate={{
              y: 10,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
          <motion.img
            src={reactLogo}
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              width: width < 600 ? 50 : 100,
            }}
            initial={{ y: -10 }}
            animate={{
              y: 10,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0,
            }}
          />
          <motion.img
            src={jsLogo}
            style={{
              position: "absolute",
              bottom: 5,
              left: "50%",
              width: width < 600 ? 50 : 100,
            }}
            initial={{ y: -10 }}
            animate={{
              y: 10,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
