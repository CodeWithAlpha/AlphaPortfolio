import { Button, Stack, Typography, styled } from "@mui/material";
import CustomButton from "./button/CustomButton";
import { useSettingContext } from "../theme/SettingContext";
import { LightMode } from "../assets/Icons/Lightmode";
import { Darkmode } from "../assets/Icons/Darkmode";

function Header({ backgroundColor }: any) {
  const { themeMode, onToggleMode } = useSettingContext();
  return (
    <Stack sx={{ backgroundColor: backgroundColor }}>
      <Stack
        width={"80%"}
        height={80}
        margin={"auto"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography color={"primary.main"} variant="h6">
          Alpha
        </Typography>
        <Stack flexDirection={"row"} alignItems={"center"} gap={5}>
          <Typography color={"primary.main"} variant="h6">
            Home
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            About
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            Portfolio
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            Services
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            Blog
          </Typography>
          <Typography variant="h6" fontWeight={500}>
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
