import { Button, Stack, Typography, styled } from "@mui/material";

const MyThemeComponent = styled("button")(({ theme }) => ({
  color: theme.palette.common.black,
  backgroundColor: "transparent",
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 2.5 * theme.shape.borderRadius,
  outline: "none",
  fontSize: 18,
  transition: `${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })}`,
  "&:hover": {
    color: "white",
    backgroundColor: `${theme.palette.primary.main}`,
  },
}));

function Header() {
  return (
    <Stack>
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
          <MyThemeComponent>Download CV</MyThemeComponent>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
