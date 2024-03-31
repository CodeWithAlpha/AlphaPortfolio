import { Stack, Typography, useTheme } from "@mui/material";
import { Progress1 } from "../../assets/process/progress1";
import { Progress2 } from "../../assets/process/progress2";
import { Progress3 } from "../../assets/process/progress3";
import progressCircle1 from "../../assets/process/1.png";
import progressCircle2 from "../../assets/process/2.png";
import progressCircle3 from "../../assets/process/3.png";

import { motion } from "framer-motion";

function Progress() {
  const theme = useTheme();
  const data = [
    {
      icon: <Progress1 />,
      image: progressCircle1,
      Title: "Pixel Perfect",
      description:
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
    },
    {
      icon: <Progress2 />,
      image: progressCircle2,
      Title: "High Quality",
      description:
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
    },
    {
      icon: <Progress3 />,
      image: progressCircle3,
      Title: "Awesome Idea",
      description:
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design",
    },
  ];

  return (
    <Stack
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      width={{ xs: "95%", md: "80%" }}
      margin={"auto"}
    >
      {data.map((item: any, index: number) => {
        return (
          <Stack
            alignItems={"center"}
            my={{ xs: 2, md: 15 }}
            gap={2}
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
                delay: index / 5 + 0.05,
                stiffness: 260,
              },
            }}
            viewport={{ once: false }}
          >
            <span style={{ position: "relative", width: 100, height: 100 }}>
              <img src={item.image} alt="" style={{ position: "absolute" }} />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {item.icon}
              </span>
            </span>
            <Typography sx={{ fontSize: 26 }}>{item.Title}</Typography>
            <Typography
              sx={{ fontSize: 16, textAlign: "center" }}
              variant="body2"
              color={"text.secondary"}
            >
              {item.description}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Progress;
