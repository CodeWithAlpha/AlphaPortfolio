import React, { ReactNode } from "react";
import lightHomeImage from "../../assets/lightHomePg.jpg";
import darkHomeImage from "../../assets/darkHomeBG.png";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import CustomButton from "../../components/button/CustomButton";
import { Linkedin } from "../../assets/Icons/Linkedin";
import homeAvatar from "../../assets/avatar.png";
import { useSettingContext } from "../../theme/SettingContext";
import reactLogo from "../../assets/skills/logo/react.png";
import htmlLogo from "../../assets/skills/logo/JavaScript-logo.png";
import jsLogo from "../../assets/skills/logo/html.jpg";

function Home() {
  const { themeMode } = useSettingContext();

  const theme = useTheme();
  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundImage: `url(${
          themeMode == "light" ? lightHomeImage : darkHomeImage
        })`,
      }}
    >
      <Grid
        display={"grid"}
        gridTemplateColumns={{ sm: "repeat(2, 1fr)" }}
        sx={{ placeItems: "center" }}
        height={"100%"}
        width="80%"
        margin={"auto"}
      >
        <Stack gap={1}>
          <Typography sx={{ color: "primary.main", fontSize: 40 }}>
            Hello I'm
          </Typography>
          <Typography
            sx={{
              fontSize: 60,
              fontWeight: 600,
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
            sx={{ color: "text.secondary", fontSize: 20, width: "70%" }}
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
        >
          <img src={homeAvatar} height={"70%"} width={"70%"} />
          <img
            src={htmlLogo}
            style={{
              position: "absolute",
              top: 5,
              left: 5,
              width: 100,
            }}
          />
          <img
            src={reactLogo}
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              width: 100,
            }}
          />
          <img
            src={jsLogo}
            style={{
              position: "absolute",
              bottom: 5,
              left: "50%",
              width: 100,
            }}
          />
        </Stack>
      </Grid>
    </Stack>
  );
}

export default Home;
