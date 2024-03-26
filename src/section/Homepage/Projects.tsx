import React from "react";
import { Stack, Typography } from "@mui/material";
import leftbg from "../../assets/project/leftbg.png";
import rightbg from "../../assets/project/rightbg.png";

function Projects() {
  return (
    <Stack
      sx={{
        position: "relative",
        height: "fit-content",
        backgroundImage: `url('${leftbg}'), url('${rightbg}')`,
        backgroundPosition: "top left, bottom right",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "20%",
        py: 5,
      }}
    >
      <Stack alignItems={"center"}>
        <Typography variant="h5" color={"primary.main"}>
          Portfolio
        </Typography>
        <Typography variant="body1" fontSize={44}>
          My Amazing Works
        </Typography>
        <Typography
          variant="h6"
          fontSize={26}
          color={"text.secondary"}
          maxWidth={700}
          textAlign={"center"}
          mt={4}
        >
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Projects;
