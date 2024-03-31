import { Stack, Typography } from "@mui/material";
import React from "react";
import loading from "../../assets/Loading.svg";

function LoadingScreen() {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
      <img src={loading} alt="alpha" />
      <Typography>Loading...</Typography>
    </Stack>
  );
}

export default LoadingScreen;
