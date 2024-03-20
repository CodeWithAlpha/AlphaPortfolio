import { Stack, Typography, useTheme } from "@mui/material";
import { Progress1 } from "../../assets/process/progress1";
import { Progress2 } from "../../assets/process/progress2";
import { Progress3 } from "../../assets/process/progress3";
import progressCircle1 from "../../assets/process/1.png";
import progressCircle2 from "../../assets/process/2.png";
import progressCircle3 from "../../assets/process/3.png";

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
      flexDirection={"row"}
      justifyContent={"space-between"}
      width={"80%"}
      margin={"auto"}
      gap={5}
    >
      {data.map((item: any) => {
        return (
          <Stack alignItems={"center"} my={15} gap={2}>
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
