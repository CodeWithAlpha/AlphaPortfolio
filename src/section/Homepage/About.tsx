import { Stack, Typography } from "@mui/material";
import React from "react";
import bg1 from "../../assets/about/1.png";
import bg2 from "../../assets/about/2.png";
import aboutImage from "../../assets/about/about.jpg";
import CustomButton from "../../components/button/CustomButton";
import { motion } from "framer-motion";

function About() {
  return (
    <Stack
      sx={{
        position: "relative",
        height: "fit-content",
        backgroundImage: `url('${bg1}'), url('${bg2}')`,
        backgroundPosition: "top left, bottom right",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "10%",
      }}
    >
      <Stack
        flexDirection={{ sm: "row" }}
        gap={10}
        alignItems={"center"}
        sx={{ width: { sm: "95%", md: "80%" }, margin: { xs: 2, sm: "auto" } }}
      >
        <Stack
          component={motion.div}
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 120,
            },
          }}
          viewport={{ once: false }}
        >
          <img src={aboutImage} alt="about" height={"80%"} />
        </Stack>
        <Stack
          component={motion.div}
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 120,
            },
          }}
          viewport={{ once: false }}
        >
          <Typography variant={"body1"} fontSize={30} color={"primary"}>
            I'm a Developer
          </Typography>
          <Typography
            variant={"body1"}
            fontSize={{ xs: 30, md: 50 }}
            width={{ xs: "100%", sm: 500 }}
          >
            I Can Design Anything You Want
          </Typography>
          <Typography
            variant={"subtitle1"}
            color={"text.secondary"}
            sx={{ width: { xs: "100%", sm: 650 }, lineHeight: 2 }}
          >
            Hello there! I'm a Front End Developer, and I'm very passionate and
            dedicated to my work. With 1.5 years of experience as a professional
            web developer, I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the design
            process, from discussion and collaboration.
          </Typography>
          <Stack
            sx={{ width: "fit-content" }}
            mt={6}
            component={motion.div}
            initial={{
              opacity: 0,
              x: -15,
              rotate: 180,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 360,
              transition: {
                duration: 0.5,
                delay: 0.5,
                type: "spring",
                stiffness: 120,
              },
            }}
            viewport={{ once: false }}
          >
            <CustomButton variant="contained">Hire</CustomButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default About;
