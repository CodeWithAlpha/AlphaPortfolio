import { Button, styled, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { variantValuesProps } from "./types";

type props = {
  variant: variantValuesProps;
  children: ReactNode;
};

export default function CustomButton({ children, variant, ...other }: props) {
  const Button = styled("button")(({ theme }) => ({
    color:
      variant == "outlined"
        ? theme.palette.common.black
        : theme.palette.common.white,
    cursor: "pointer",
    backgroundColor: "transparent",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 3 * theme.shape.borderRadius,
    outline: "none",
    fontSize: 18,
    transition: `${theme.transitions.create(["color", "transform"], {
      duration: theme.transitions.duration.complex,
    })}`,
    position: "relative",
    overflow: "hidden",
    zIndex: 9,
    "&:hover": {
      color: variant == "outlined" ? "white" : "black",
      // backgroundColor: `${theme.palette.primary.main}`,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: variant == "outlined" ? -60 : 0,
      height: "100%",
      width: "100%",
      zIndex: -5,
      backgroundColor: `${theme.palette.primary.main}`,
      transition: `${theme.transitions.create(["bottom", "transform"], {
        duration: theme.transitions.duration.complex,
      })}`,
    },
    "&:hover:after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: variant == "outlined" ? 0 : -60,
      height: "100%",
      color: variant == "outlined" ? "white" : "black",
      transition: `${theme.transitions.create(["bottom", "transform"], {
        duration: theme.transitions.duration.complex,
      })}`,
    },
  }));
  return <Button {...other}>{children}</Button>;
}
