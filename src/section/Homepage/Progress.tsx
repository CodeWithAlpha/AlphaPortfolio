import { Stack, Typography, useTheme } from "@mui/material";
import { Iconperfect } from "../../assets/Icons/Iconperfect";
import { Highquality } from "../../assets/Icons/Highquality";
import { Idea } from "../../assets/Icons/Idea";

function Progress() {
  const theme = useTheme();
  const data = [
    {
      icon: <Iconperfect color={theme.palette.primary.main} />,
      Title: "Pixel Perfect",
      description:
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
    },
    {
      icon: <Highquality color={theme.palette.primary.main} />,
      Title: "High Quality",
      description:
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
    },
    {
      icon: <Idea color={theme.palette.primary.main} />,
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
            {item.icon}
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
