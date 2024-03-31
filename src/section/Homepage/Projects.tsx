import React from "react";
import { Stack, Typography } from "@mui/material";
import leftbg from "../../assets/project/leftbg.png";
import rightbg from "../../assets/project/rightbg.png";
import ComingSoon from "../../assets/project/ComingSoon";
import { motion } from "framer-motion";

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
      <Stack
        alignItems={"center"}
        component={motion.div}
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.25,
            type: "spring",
            stiffness: 120,
          },
        }}
        viewport={{ once: false }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 500 }}
          color={"primary.main"}
        >
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
      <Stack
        alignItems={"center"}
        component={motion.div}
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            type: "spring",
            delay: 0.5,
            stiffness: 260,
          },
        }}
        viewport={{ once: false }}
        sx={{ mt: 5, width: { xs: 300, md: "100%" } }}
      >
        <ComingSoon />
      </Stack>
    </Stack>
  );
}

export default Projects;
